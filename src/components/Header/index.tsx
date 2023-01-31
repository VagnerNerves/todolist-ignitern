import { View } from 'react-native'

import { styles } from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <Logo height={32} />
    </View>
  )
}
