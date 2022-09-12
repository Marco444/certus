import type { NextPage } from "next";
import { MetaMaskProvider } from "metamask-react";
import {MetaMask} from "./MetaMask";

const Home: NextPage = () => {

    return (
      <MetaMaskProvider>
          <MetaMask></MetaMask>
      </MetaMaskProvider>
  );
};

export default Home;
