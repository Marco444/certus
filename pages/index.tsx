import type { NextPage } from "next";

import Landing from "./landing";
import Head from "next/head";

import { MoralisProvider } from "react-moralis";
//import { MetaMaskProvider } from "metamask-react";

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
        appId="cnFCkZdGddgLHdbf502mPivjQDElfxnGmcAoBnyB"
        serverUrl="https://38zbwija8cju.usemoralis.com:2053/server"
      >
        <Landing />
      </MoralisProvider>
      ,
      {/* }<MetaMaskProvider>
        <Landing />
      </MetaMaskProvider> */}
    </>
  );
};

export default Home;
