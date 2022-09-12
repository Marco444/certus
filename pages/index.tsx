import type { NextPage } from "next";
import AppMoralis from "./AppMoralis";
import { MoralisProvider } from "react-moralis";

const Home: NextPage = () => {
    return (
        <MoralisProvider serverUrl="https://ktedylculcwo.usemoralis.com:2053/server" appId="CRpN1JvKz5OgW3XfTGhiXV1RTap72LEVoUjQN2Sk">
            <AppMoralis />
        </MoralisProvider>
  );
};

export default Home;
