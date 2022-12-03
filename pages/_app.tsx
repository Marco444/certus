import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { UserProvider } from "../components/userContext";
import { NftBalanceProvider } from "../components/nftBalancesContext";
import { SelectedNftProvider } from "../components/selectedNftContext";


function MyApp({ Component, pageProps }: AppProps) {
    return (
            <UserProvider>
                <NftBalanceProvider>
                    <SelectedNftProvider>
                <Component {...pageProps} />
                    </SelectedNftProvider>
                </NftBalanceProvider>
            </UserProvider>
    );
}

export default MyApp;