import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { UserProvider } from "../components/userContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://rbhdqxxttltw.grandmoralis.com:2053/server"
      appId="XemYMntKGORFuirwocwynIuZK4QSBcZBU3Sfxynk"
    >
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </MoralisProvider>
  );
}

export default MyApp;
