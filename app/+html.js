import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({children}) {
  return (
    <html lang="ko">
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
      <title>Wefun</title>
      <meta name="description" content="Wefun"/>
      <meta name="apple-itunes-app" content="app-id=6479632616"/>

      <ScrollViewStyleReset />

    </head>
    <body>{children}</body>
    </html>
  );
}
