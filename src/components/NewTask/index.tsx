import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import uuid from 'react-native-uuid'

import { PlusCircle, Trash } from 'phosphor-react-native'

import { styles } from './styles'

import Clipboard from '../../assets/clipboard.svg'
import { Task } from '../Task'

export interface TaskProps {
  id: string
  description: string
  isConclueded: boolean
}

export function NewTask() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleCreateNewTask() {
    if (newTask.trim() === '') {
      return Alert.alert(
        'Tarefaz Vazia',
        'Informe a tarefa para poder adiciona-la.'
      )
    }

    const task = {
      id: uuid.v4().toString(),
      description: newTask.trim(),
      isConclueded: false
    }

    setTasks(prevState => [task, ...prevState])
    setNewTask('')
  }

  function handleConcludedTask(id: string) {
    setTasks(prevState =>
      prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isConclueded: !task.isConclueded
          }
        } else {
          return task
        }
      })
    )
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover', 'Deseja realmente remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () =>
          setTasks(prevState => prevState.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function amountTaksCreated() {
    return tasks.length
  }

  function amountTaksConcluded() {
    const tasksConcluded = tasks.filter(task => task.isConclueded === true)

    return tasksConcluded.length
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity
          style={styles.buttonAddTask}
          activeOpacity={0.7}
          onPress={handleCreateNewTask}
        >
          <PlusCircle size={16} color="#FFFFFF" weight="regular" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerTaskInfo}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCreated}>Criadas</Text>
          <View style={styles.taskCount}>
            <Text style={styles.taskCountText}>{amountTaksCreated()}</Text>
          </View>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.taskConclueded}>Concluídas</Text>
          <View style={styles.taskCount}>
            <Text style={styles.taskCountText}>{amountTaksConcluded()}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            onConcluded={() => handleConcludedTask(item.id)}
            onRemove={() => handleRemoveTask(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerIsempt}>
            <Clipboard />
            <Text style={styles.titleIsempt}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.descIsempt}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
