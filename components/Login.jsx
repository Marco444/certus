import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";
import { useState } from "react";
import AppMoralis from "../components/AppMoralis";

const Login = () => {
  const { userName, setUserName } = useState("");

  const { address, setAddress } = useState("");

  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          setUserName(user.id);
          setAddress(user.get("ethAdress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // const options = {
  //   chain: "polygon",
  //   address: Moralis.User.current().get(),
  // };
  //
  // const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);

  return (
    <>
      <IconButton
        onClick={login}
        aria-label="fingerprint"
        color="secondary"
        sx={{
          ":hover": {
            color: "#69f0ae",
            bgcolor: "#2bbd7e",
          },
          color: "black",
          height: 60,
          width: 60,
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Fingerprint sx={{ fontSize: 60 }} />
      </IconButton>
      <AppMoralis> </AppMoralis>
    </>
  );
};

export default Login;
