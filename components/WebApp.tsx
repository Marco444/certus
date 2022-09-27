import Landing from "../pages/landing";

import { useMoralis } from "react-moralis";
import { useState } from "react";

import Nft from "../pages/nft";
import NFTBalances from "./testGetNfts";
import { Button } from "@mui/material";

const WebApp = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <>
      {!isAuthenticated && <Landing authenticateHandler={authenticate} />}
      {isAuthenticated && (
        <>
          <Nft logout={logout} />
        </>
      )}
    </>
  );
};

export default WebApp;
