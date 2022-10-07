import { useContext, useEffect, useState } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
import UserContext from "../components/userContext";
import { useNFTBalances } from "react-moralis";
import { router } from "next/client";
import NftPreview from "../components/nftPreview";
import { Button } from "@mui/material";
import NFTBalances from "../components/nftBalances";

import { useMoralis } from "react-moralis";
import NftCard from "../components/nftCard";
import {Grid, Row} from '@mui/material';
import { padding } from "@mui/system";
import { HorizontalSplitRounded } from "@mui/icons-material";

function Nfts() {

  const [logout, isAuthenticating] = useContext(UserContext);
  const logouthandler = () => {
    console.log("logout");
    logout();
  }

  const rows = [];
  for (let i = 0; i < 3; i++) {
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
        MY PRODUCTS
      </div>
      <NFTBalances />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        {/* <Grid container spacing={0.5} className="card-grid">
            {rows}
        </Grid> */}
        <div className="cards">
          {/* <NftCard/>
          <NftCard/> */}
          {rows}
        </div>
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
