import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { A } from "@expo/html-elements";

const BASE_URI = 'kr.wefun.app://'

export default function Page() {
  const [uriSource, setUriSource] = useState<string | null>(null)
  const aRef = useRef(null);

  useEffect(() => {


    Linking.openURL('')
  }, []);

  const handleUrl = async (event: { url: string }) => {
    const url = event.url;
    const route = url.replace(/.*?:\/\//g, '');

    if (route.includes('details')) {
      const id = route.split('/').pop();
      console.log(`Navigating to Detail screen with id: ${id}`);
      // navigate to the Detail screen with the appropriate id
    }
  };

  useEffect(() => {
    Linking.addEventListener('url', handleUrl);

    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  return (
    <View style={styles.container}>
      <A ref={aRef} href={BASE_URI}>
        <View style={styles.aTag}>
          <Image
            style={styles.logo}
            source={require('@/assets/logo.png')}
          />
          <Text>Wefun</Text>
        </View>
      </A>
    </View>
  );
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
    marginBottom: 24
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 24
  }
});