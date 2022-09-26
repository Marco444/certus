import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

import { useMoralis } from "react-moralis";
import { useState } from "react";

import Nft from "../pages/nft";

const Login = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <>
      <IconButton
        onClick={authenticate}
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
      {isAuthenticated && <Nft />}
    </>
  );
};

export default Login;
