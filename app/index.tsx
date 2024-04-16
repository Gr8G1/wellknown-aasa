import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';


export default function Page() {
  const universalLink = useMemo(() => [
    'https://bpfzl.app.link/', // Default Link
    'https://bpfzl.app.link/B5selbnUPIb', // Quick Link (Created Web)
    'https://bpfzl.app.link/kuUQuiq1PIb',  // Quick Link (Created API)
    'https://bpfzl.app.link/ed2yBRX1PIb',  // Quick Link (Created API)
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