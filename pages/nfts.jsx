import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "../components/userContext";
import NftBalanceContext from "../components/nftBalancesContext";

import NFTBalances from "../components/nftBalances";
import NftCard from "../components/nftCard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Grid } from "@mui/material";
import { router } from "next/router";
import { Stack } from "@mui/system";

import { useMediaQuery } from 'react-responsive'
import WalletBalance from "../components/WalletBalance";

function Nfts() {
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);
  const [nfts, setNfts] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 })

    const [
        userAddress,
        setUserAddress,
    ] = useContext(UserContext);
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

  let canMint = true;

  const myProducts = () => {
    router.push("./myProducts");
  }

  if(!canMint){
    return(
    <>
        <WalletBalance />
        <Stack sx={{padding: 2, margin: 3}} spacing={4} direction={"row"} >
            <div style={{fontFamily: "Bebas Neue", fontSize: 35}}>
              MY COLLECTION
            </div>
            <Button startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(userAddress)}>
                copy wallet address
            </Button>
        </Stack>
        <Grid container spacing={5} >
            {nfts.map(function (res) {
                if(res.metadata != null)
                    return (
                        <Grid item>
                            <NftCard key={res.token_hash} metadata={res} />
                        </Grid>
                    );
            })}
        </Grid>
        <Button onClick={logouthandler} className="logout-btn">
            {" "}
            LOG OUT{" "}
        </Button>
    </>
  );}
else{
  return (
    <>
    <NFTBalances />
    <Stack sx={{padding: 2, margin: 3}} spacing={4} direction={"row"} >
        <button style={{fontFamily: "Bebas Neue", fontSize: 35, backgroundColor: "#11e3ab",border:"none",borderRadius:8}}>
            MY COLLECTION
        </button>
        <button style={{fontFamily: "Bebas Neue", fontSize: 35, textDecoration: "underline",border:"none",backgroundColor:"white"}} onClick = {myProducts}>
            MY PRODUCTS
        </button>
        <div style={{fontFamily: "Bebas Neue", fontSize: 35, textDecoration: "underline"}}>
            Create new product
        </div>
        <Button startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(userAddress)}>
            copy wallet address
        </Button>
    </Stack>
    <Grid container spacing={5} >
        {nfts.map(function (res) {
            if(res.metadata != null)
                return (
                    <Grid item>
                        <NftCard key={res.token_hash} metadata={res} />
                    </Grid>
                );
        })}
    </Grid>
    <Button onClick={logouthandler} className="logout-btn">
        {" "}
        LOG OUT{" "}
    </Button>
</>
)}
}

export default Nfts;
