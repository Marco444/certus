import { useContext, useEffect, useState } from "react";
import UserContext from "../components/userContext";
import NFTBalances from "../components/nftBalances";
import NftCard from "../components/nftCard";

function Nfts() {

  const [logout, isAuthenticating] = useContext(UserContext);

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
        {/* <Grid container spacing={0.5} className="card-grid">
            {rows}
        </Grid> */}
        <div className="cards">
          {/* <NftCard/>
          <NftCard/> */}
          {rows}
        </div>
    </>
  );
}

export default Nfts;
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