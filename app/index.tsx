import { View, Image, Text, StyleSheet } from 'react-native';
import { A } from '@expo/html-elements';

export default function Page() {
  return (
    <View style={styles.container}>
      <A href="kr.wefun.app://">
        <View style={styles.aTag}>
          <Image
            style={styles.logo}
            source={require('@/assets/logo.png')}
          />
          <Text>Wefun</Text>
        </View>
      </A>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aTag: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 24
  }
})