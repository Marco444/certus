import type { NextPage } from "next";
import Head from "next/head";
//import AppMoralis from "../components/AppMoralis";
//import { MoralisProvider } from "react-moralis";
import Landing from "./landing";

const Home: NextPage = () => {
  return (
    // <MoralisProvider serverUrl="https://ktedylculcwo.usemoralis.com:2053/server" appId="CRpN1JvKz5OgW3XfTGhiXV1RTap72LEVoUjQN2Sk">
    //     <AppMoralis />
    // </MoralisProvider>
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Landing />
    </>
  );
};

export default Home;
