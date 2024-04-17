import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';


export default function Page() {
  const universalLink = useMemo(() => [
    {
      link: 'https://bpfzl.app.link/hLaH7BP2PIb',
      data: 'inviteCode: ZXCASDQWE'
    },{
      link: 'https://bpfzl.app.link/vgWDioGLRIb',
      data: 'inviteCode: QWEASDZXC'
    }
  ], [])

  return (
    <View style={styles.container}>
      {universalLink.map(({ link, data}) => (
        <Pressable key={link} style={styles.press} onPress={() => Linking.openURL(link)}>
          <Text>{link}</Text>
          <Text>{data}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12
  },
  press: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
});