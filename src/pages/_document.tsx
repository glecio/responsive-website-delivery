import { Html, Head, Main, NextScript } from 'next/document'
import {Footer} from '../components/Footer'
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
