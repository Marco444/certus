import Landing from "../pages/landing";

import { useMoralis } from "react-moralis";

import Nfts from "../pages/nfts";

import { useState } from "react";

import Nft from "../pages/nft";
const WebApp = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [selectedNft, setSelectedNft] = useState(0);

  const logoutWrapper = () => {
    setSelectedNft(0);
    logout();
  };

  return (
    <>
      {!isAuthenticated && <Landing authenticateHandler={authenticate} />}
      {isAuthenticated && !selectedNft && (
        <Nfts handler={setSelectedNft} logout={logoutWrapper} />
      )}
      {selectedNft && isAuthenticated && <Nft logout={logoutWrapper} />}
    </>
  );
};

export default WebApp;
