import { Magic } from "magic-sdk";

import Web3 from "web3";
import { ethers } from "ethers";
import { useContext, useState } from "react";
import UserContext from "./userContext";
import { router } from "next/router";
import { Box, Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";
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
    isAuthenticated,
    authenticate,
    user,
    logout,
    userAddress,
    setUserAddress,
  ] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMetamask = async () => {
    await authenticate();
    if (isAuthenticated) router.push("./nfts");
  };

  const handleLogin = async () => {
    if (email === "" ) return;

    const magic = new Magic("pk_live_23C0853E32B9B729", {
      network: customNodeOptions,
    });

    const didToken = await magic.auth.loginWithMagicLink({
      email: email,
    });

    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);

    const signer = provider.getSigner();

    const address = await signer.getAddress();

    console.log(address);

    setUserAddress(address);

    router.push("./nfts");
  };
  return (
    <Stack
      sx={{
        borderRadius: 5,
        padding: 5,
        width: 300,
        margin: "auto",
        marginTop: 40,
        backgroundColor: "white",
        fontFamily: "Bebas Neue"
      }}
    >

      <h1 > Access Certus</h1>
      <TextField sx={{marginBottom: 3}} label="Email" value={email} onChange={handleEmail} />
      {/*<TextField sx={{marginBottom: 3}} label="Password" value={password} onChange={handlePassword} />*/}
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Button sx={buttonSx} onClick={handleLogin}>
          Authorize
        </Button>
        <Button sx={{...buttonSx, marginTop: 2, marginLeft: 2}}>
          <Image
            src="/../public/images/metamask.jpg"
            alt="metamask"
            height="50"
            width="50"
            onClick={handleMetamask}
          />
        </Button>
      </Stack>
    </Stack>
  );
}
