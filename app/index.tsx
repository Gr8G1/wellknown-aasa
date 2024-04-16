import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';


export default function Page() {
  const universalLink = useMemo(() => [
    'https://bpfzl.app.link/hLaH7BP2PIb' 
  ], [])

  return (
    <View style={styles.container}>
      {universalLink.map((link) => (
        <Pressable key={link} style={styles.press} onPress={() => Linking.openURL(link)}>
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
    gap: 12
  },
  press: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
});