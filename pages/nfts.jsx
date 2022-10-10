import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "../components/userContext";
import NftBalanceContext from "../components/nftBalancesContext";

import NFTBalances from "../components/nftBalances";
import NftCard from "../components/nftCard";

import { Button, Grid } from "@mui/material";
import { router } from "next/router";
import { Stack } from "@mui/system";

import { useMediaQuery } from 'react-responsive'

function Nfts() {
  const [logout, isAuthenticating] = useContext(UserContext);
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);
  const [nfts, setNfts] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const storeNfts = () => {
    if (
      nftBalance === undefined ||
      nftBalance === null ||
      nftBalance.result === null ||
      nftBalance.result === undefined
    )
      return null;
    setNfts(nftBalance.result);
  };

  useEffect(() => {
    storeNfts(nftBalance);
  }, [nftBalance]);

  const logouthandler = () => {
    router.push("./");
  }

  return (
    <>
    <NFTBalances />
    <div className="myProducts font">
    MY PRODUCTS
    </div>
    <Grid container spacing={5} >
    {nfts.map(function (res) {
      if(res.metadata != null)
        return (
          <Grid item>
          <NftCard key={res.token_hash} metadata={res} />
          </Grid>);
    })}
    </Grid>
    <Button onClick={logouthandler} className="logout-btn">
    {" "}
    LOG OUT{" "}
    </Button>
    </>
  );
}

export default Nfts;
