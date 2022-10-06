import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import Link from "next/link";

import { useContext } from 'react';
import UserContext from "../components/userContext";

import { useMoralis } from "react-moralis";
import NftCard from "../components/nftCard";
import Grid from '@mui/material/Grid';
import { padding } from "@mui/system";

function Nfts() {

  const [logout, isAuthenticating] = useContext(UserContext);
  const logouthandler = () => {
    console.log("logout");
    logout();
  }

  const rows = [];
  for (let i = 0; i < 4; i++) {
      rows.push(
          <NftCard/>
      );
  }

  return (
    <>
    {/* <NftCard/> */}
      <div
        style={{
          margin: 50,
          fontSize: 60,
          fontWeight: "normal",
          fontFamily: "Bebas Neue",
        }}
      >
        MY PRODUCTS:
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={0.5} className="card-grid">
            {rows}
        </Grid>
        {/* <Stack
          style={{
            margin: 50,
          }}
        >
          <Link href="/nft" passHref>
            <Button
              sx={{
                ":hover": {
                  color: "#ffffff",
                  bgcolor: "#4b4b4b",
                },
                color: "#ffffff",
                bgcolor: "#1e1e1e",
                maxHeight: 700,
                minHeight: 70,
                maxWidth: 700,
                minWidth: 300,
              }}
            >
              Adidas Sneaker
            </Button>
          </Link>
          <Button
              disabled={isAuthenticating}
              onClick={logouthandler}
            sx={{
              ":hover": {
                color: "#ffffff",
                bgcolor: "#FF4754",
              },
              color: "#FF4754",
              bcolor: "#FF4754",
              maxHeight: 300,
              maxWidth: 700,
            }}
          >
            {" "}
            LOG OUT{" "}
          </Button>
        </Stack> */}
      </div>
    </>
  );
}

export default Nfts;
