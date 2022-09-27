import { Stack } from "@mui/system";

import { useRouter } from 'next/router'

import Login from "../components/Login";

import { useMoralis } from "react-moralis";

import { useState } from "react";


function Landing() {

  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const router = useRouter()


  const authenticateHandler = () => {
    authenticate();
    if(isAuthenticated)
        router.push('/nfts');
  }

  return (
    <>
      <Stack style={{ paddingLeft: 333, paddingTop: 300 }} direction="row">
        <Stack spacing="2">
          <div
            style={{
              fontSize: 133,
              fontWeight: "bold",
              fontFamily: "Bebas Neue",
            }}
          >
            CERTUS
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "Bebas Neue",
            }}
          >
            BLOCKCHAIN BACKED AUTHENTICATION
          </div>
        </Stack>

    
        <Login authenticate={authenticateHandler} />
       
      </Stack>
    </>
  );
}

export default Landing;
