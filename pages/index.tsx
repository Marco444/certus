import type { NextPage } from "next";
import Head from "next/head";

import WebApp from "../components/WebApp";

import { MoralisProvider } from "react-moralis";

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


      <WebApp />
     
    </>
  );
};

export default Home;
