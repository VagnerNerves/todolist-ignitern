import { Text, TouchableOpacity, View } from 'react-native'

import { Check, Trash } from 'phosphor-react-native'

import { styles } from './styles'

import { TaskProps } from '../NewTask'

interface Props {
  task: TaskProps
  onConcluded: () => void
  onRemove: () => void
}

export function Task({ task, onConcluded, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttomContainer}
        activeOpacity={0.7}
        onPress={onConcluded}
      >
        {task.isConclueded ? (
          <View style={styles.buttomCheck}>
            <Check size={12} color="#F2F2F2" />
          </View>
        ) : (
          <View style={styles.buttom} />
        )}

        <Text style={task.isConclueded ? styles.textChecked : styles.text}>
          {task.description}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTrash}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Trash size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
