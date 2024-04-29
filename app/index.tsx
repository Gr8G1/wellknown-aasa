import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';


export default function Page() {
  const universalLink = useMemo(() => [
    {
      link: 'https://0j6en.app.link/WHJ4ksz6aJb',
      data: 'inviteCode: QWEASDZXC'
    },
    {
      link: 'https://0j6en.app.link/4YnFDLB6aJb',
      data: 'inviteCode: ASDQWE'
    }
  ], [])

  return (
    <View style={styles.container}>
      {universalLink.map(({ link, data }) => (
        <Pressable key={link} style={styles.press} onPress={() => Linking.openURL(link)}>
          <Text>{data}</Text>
          <Text>{link}</Text>
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
    gap: 24
  },
  press: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
});