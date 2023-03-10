import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 32
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -27,
    marginBottom: 32
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    color: '#F2F2F2',

    fontFamily: 'Inter_400Regular',
    fontSize: 16
  },
  buttonAddTask: {
    width: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTaskInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskCreated: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,

    color: '#4EA8DE',
    marginRight: 8
  },
  taskConclueded: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,

    color: '#8284FA',
    marginRight: 8
  },
  taskCount: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskCountText: {
    color: '#D9D9D9',

    fontFamily: 'Inter_400Regular',
    fontSize: 12
  },
  containerIsempt: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 48
  },
  titleIsempt: {
    color: '#808080',
    marginTop: 16,

    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    lineHeight: 19
  },
  descIsempt: {
    color: '#808080',

    fontFamily: 'Inter_400Regular',
    fontSize: 14
  }
})
