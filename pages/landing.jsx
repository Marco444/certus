import { Stack } from "@mui/system";

import { useRouter } from "next/router";

import Login from "../components/Login";

import { useMoralis } from "react-moralis";

import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../components/userContext";

function Landing() {
  const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);
  const router = useRouter();

  const authenticateHandler = async () => {
    await authenticate();
    router.push("/nfts");
  };

  return (
    <>
      <Stack className="landing" direction="row" spacing={10}>
        <Stack spacing={2}>
          <div className="title-landing font">
            CERTUS
          </div>
          <div className="description-landing font">
            BLOCKCHAIN BACKED AUTHENTICATION
          </div>
        </Stack>
        <Login className="fingerprint-landing" authenticate={authenticateHandler} />
      </Stack>
    </>
  );
}

export default Landing;
