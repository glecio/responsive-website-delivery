import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Footer} from '../components/Footer'
export default class MyDocument extends Document {
  render() {
    return(
    <Html lang="pt-br">
      <Head>
      </Head>
      <body>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
)}}
