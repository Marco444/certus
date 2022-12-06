import {useContext, useEffect} from "react";
import UserContext from "../components/userContext";
import NftBalanceContext from "../components/nftBalancesContext";
import NftCard from "../components/nftCard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, Grid } from "@mui/material";
import { router } from "next/router";
import { Stack } from "@mui/system";
import WalletBalance from "../components/WalletBalances";

function Nfts() {
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

  const [
    userAddress,
    setUserAddress,
  ] = useContext(UserContext);

    useEffect(() => setUserAddress(localStorage.getItem('userWallet')))


  return (
    <>
      <WalletBalance />
      <Stack sx={{ padding: 2, margin: 3 }} spacing={4} direction={"row"}>
        <div style={{ fontFamily: "Bebas Neue", fontSize: 50 }}>
          MY PRODUCTS
        </div>
        <Button
          startIcon={<ContentCopyIcon />}
          onClick={() => navigator.clipboard.writeText(userAddress)}
        >
          copy wallet address
        </Button>
      </Stack>
      <Grid container spacing={5}>
        {nftBalance.map( (res,index) => {
            return (<Grid key={index} item>
                <NftCard key={res.tokenUri.raw} nft={res}/>
            </Grid>);
        })}
      </Grid>
      <Button
        onClick={() => {router.push("./")}}
        sx={{
          position: "fixed",
          top: 10,
          right: 10,
          backgroundColor: "red",
          textAlign: "center",
          color: "white",
          borderRadius: 20,
          fontSize: 14,
        }}
      >
        LOG OUT
      </Button>
    </>
  );
}

export default Nfts;
