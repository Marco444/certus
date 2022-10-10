import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "../components/userContext";
import NftBalanceContext from "../components/nftBalancesContext";

import NFTBalances from "../components/nftBalances";
import NftCard from "../components/nftCard";

import { Button } from "@mui/material";
import { router } from "next/router";

function Nfts() {
  const [logout, isAuthenticating] = useContext(UserContext);
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);
  const [nfts, setNfts] = useState([]);

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
      <div className="cards">
        {nfts.map(function (res) {
          return <NftCard key={res.token_hash} metadata={res} />;
        })}
      </div>
      <Button onClick={logouthandler} className="logout-btn">
        {" "}
        LOG OUT{" "}
      </Button>
    </>
  );
}

export default Nfts;