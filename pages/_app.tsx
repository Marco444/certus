import '../styles/globals.css'
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {UserProvider} from '../components/userContext';
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    // serverUrl="https://fs1dakp51eab.usemoralis.com:2053/server"
    // appId="CMbB476u4cDHZMumKeGfvSItJbutvqhC2PNpgn5j"
    serverUrl="https://9tjvaum3lnqq.usemoralis.com:2053/server"
    appId="ZCbbNH3Gop15IRPio3BTR5nGHI4Jc5yeXLKMUG9N"
  >
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </MoralisProvider>
  )
}

export default MyApp
