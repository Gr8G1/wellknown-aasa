import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { A } from "@expo/html-elements";

const BASE_URI = 'kr.wefun.app://'

export default function Page() {
  const aRef = useRef(null);

  useEffect(() => {
    const handleDOMContentLoaded = async () => {
      const linkingUri = await Linking.getInitialURL();

      let baseUri = BASE_URI;

      if (linkingUri) {
        baseUri = linkingUri.split('?link=')[1];
      }

      if (aRef.current) {
        const link = aRef.current;

        console.log(link)
        
        // link.props.href = link.props.href.replace('exp://REPLACE_ME/', baseUri);
      }

      const redirectInterval = setInterval(() => {
        // Code for countdown
      }, 1000);

      return () => clearInterval(redirectInterval);
    };

    handleDOMContentLoaded();
  }, []);

  return (
    <View style={styles.container}>
      <A ref={aRef}>
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