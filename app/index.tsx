import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Linking, Pressable, Platform } from 'react-native';

const SCHEME = 'kr.wefun.app://'
const APP_INFOS = {
  appName: '토스',
  appStoreLocale: 'kr',
  appStoreId: '839333328',
  playStoreId: 'viva.republica.toss'
}

// const APP_INFOS = {
//   appStoreLocale: 'kr',
//   appName: 'wefun',
//   appStoreId: '839333328',
//   playStoreId: 'wefun'
// }

export default function Page() {
  const handleOpenUrl = async () => {
    const url = await Linking.getInitialURL();
    const match = url?.match(/\?([^&]+)/);

    if (!!match && ['id', 'email', 'qr'].some((v) => match[1].startsWith(v))) {
      const path = match[1].split('=')

      await Linking.openURL(`${SCHEME}${path[0]}/${path[1]}`).catch((e) => {})
    }
  };

  const canOpenURL = async (
    url: string,
    {
      appStoreLocale = 'ko',
      appName,
      appStoreId,
      playStoreId
    }: {
      [key: string]: string
    }) => {
    try {
      console.log(Platform)
      
      if (Platform.OS !== 'web') {
        const canOpen = await Linking.canOpenURL(url)

        if (canOpen) await handleOpenUrl()
      }
    } catch(e: any) {
      if (e.code === 'EUNSPECIFIED') {
        if (Platform.OS === 'ios') {
          const locale = typeof appStoreLocale === 'undefined'
            ? 'ko'
            : appStoreLocale;

          await Linking.openURL(`https://apps.apple.com/${locale}/app/${appName}/id${appStoreId}`);
        } else {
          await Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`);
        }
      } else {
        throw new Error(`Could not open ${appName}. ${e.toString()}`);
      }
    }
  };

  const handeOpenStore = async ({ appStoreLocale = 'ko', appName, appStoreId, playStoreId }:{
    [key: string]: string
  }) => {
    if (Platform.OS === 'ios') {
      await Linking.openURL(`https://apps.apple.com/${appStoreLocale}/app/${appName}/id${appStoreId}`);
    } else {
      await Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`);
    }
  };

  const handleLinking = async () => {
    try {
      await canOpenURL(SCHEME, APP_INFOS)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    ;(async () => {
      await handleLinking()
    })()
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.press} onPress={() => handeOpenStore(APP_INFOS)}>
        <Image
          style={styles.logo}
          source={require('@/assets/logo.png')}
        />
        <Text>Wefun</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  press: {
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