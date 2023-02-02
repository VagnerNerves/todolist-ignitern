import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',

    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',

    marginBottom: 8
  },
  buttomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttom: {
    width: 17.45,
    height: 17.45,

    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',

    marginRight: 12
  },
  buttomCheck: {
    width: 17.45,
    height: 17.45,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',

    marginRight: 12
  },
  text: {
    flex: 1,

    fontFamily: 'Inter_400Regular',
    fontSize: 14,

    color: '#F2F2F2'
  },
  textChecked: {
    flex: 1,

    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    textDecorationLine: 'line-through',

    color: '#808080'
  },
  buttonTrash: {
    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center'
  }
})
