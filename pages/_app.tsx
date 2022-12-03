import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { UserProvider } from "../components/userContext";
import { MoralisProvider } from "react-moralis";
import { NftBalanceProvider } from "../components/nftBalancesContext";
import { SelectedNftProvider } from "../components/selectedNftContext";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <MoralisProvider
        //     // serverUrl="https://rbhdqxxttltw.grandmoralis.com:2053/server"
        //     serverUrl="https://9tjvaum3lnqq.usemoralis.com:2053/server"
        //     // appId="XemYMntKGORFuirwocwynIuZK4QSBcZBU3Sfxynk"
        //     appId="ZCbbNH3Gop15IRPio3BTR5nGHI4Jc5yeXLKMUG9N"
        // >
            <UserProvider>
                <NftBalanceProvider>
                    <SelectedNftProvider>
                <Component {...pageProps} />
                    </SelectedNftProvider>
                </NftBalanceProvider>
            </UserProvider>
        // </MoralisProvider>
    );
}

export default MyApp;