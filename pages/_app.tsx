import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { UserProvider } from "../components/userContext";
import { NftBalanceProvider } from "../components/nftBalancesContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      // serverUrl="https://rbhdqxxttltw.grandmoralis.com:2053/server"
      serverUrl="https://9tjvaum3lnqq.usemoralis.com:2053/server"
      // appId="XemYMntKGORFuirwocwynIuZK4QSBcZBU3Sfxynk"
      appId="ZCbbNH3Gop15IRPio3BTR5nGHI4Jc5yeXLKMUG9N"
    >
      <UserProvider>
        <NftBalanceProvider>
          <Component {...pageProps} />
        </NftBalanceProvider>
      </UserProvider>
    </MoralisProvider>
  );
}

export default MyApp;
