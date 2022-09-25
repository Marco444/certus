import type { NextPage } from "next";
import { MoralisProvider } from "react-moralis";
import Landing from "./landing";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MoralisProvider
        serverUrl="https://38zbwija8cju.usemoralis.com:2053/server"
        appId="cnFCkZdGddgLHdbf502mPivjQDElfxnGmcAoBnyB"
      >
        <Landing />
      </MoralisProvider>
    </>
  );
};

export default Home;
