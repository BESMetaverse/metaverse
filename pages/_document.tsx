import { FC } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

interface Props {
  __NEXT_DATA__: any
}
const Document: FC<Props> = (props) => {
  const currentLocale =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale
  return (
    <Html lang={currentLocale}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          type="text/css"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
          type="text/css"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
