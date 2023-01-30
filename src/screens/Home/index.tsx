import { Text, View } from 'react-native'
import { styles } from './styles'

import Logo from '../../assets/logo.svg'

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Logo height={32} />
      </View>
      <Text>Home</Text>
    </View>
  )
}
