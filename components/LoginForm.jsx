import { Magic } from "magic-sdk";

import Web3 from "web3";
import { ethers } from "ethers";
import { useContext, useState } from "react";
import UserContext from "./userContext";
import { router } from "next/router";
import { Box, Stack } from "@mui/system";
import {Alert, Button, CircularProgress, TextField} from "@mui/material";
import Image from "next/image";

export default function LoginForm() {
  const customNodeOptions = {
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    chainId: "8001",
  };

  const buttonSx = {
    color: "#11e3ab",
    border: 1,
    marginTop: 2,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 5,
  };

  const [
    userAddress,
    setUserAddress,
  ] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = async () => {
    if (email === "" ) return;

    setLoading(true)
    const magic = new Magic("pk_live_23C0853E32B9B729", {
      network: customNodeOptions,
    });

    const didToken = await magic.auth.loginWithMagicLink({
      email: email,
    });

    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);

    const signer = provider.getSigner();

    const address = await signer.getAddress();

    setUserAddress(address);

    router.push("./nfts");
  };
  return (
    <Stack
      sx={{
        padding: 5,
        margin: "auto",
        backgroundColor: "white",
        fontFamily: "Bebas Neue"
      }}
      style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

      <h1 > Access Certus</h1>
      <TextField  label="Email" value={email} onChange={handleEmail} />
        <Button sx={buttonSx} onClick={handleLogin}>
          Access
        </Button>
      {!loading && <Alert severity="info" sx={{width: 200, borderRadius: 5, marginTop: 2}}>
          If you do not have an account this will create one, and if you have one then you will log in!
        </Alert> }
      {loading && <CircularProgress sx={{marginTop: 2}}/> }
    </Stack>
  );
}
