import { useContext, useEffect, useState } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
import UserContext from "../components/userContext";
import { useNFTBalances } from "react-moralis";
import { router } from "next/client";
import NftPreview from "../components/nftPreview";
import { Button } from "@mui/material";
import NFTBalances from "../components/nftBalances";


function Nfts() {
  const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const nfts = [
    { key: "a", name: "test", img: "images/shoe.png" },
    { key: "b", name: "test", img: "images/shoe.png" },
  ];

  const styles = {
    backgroundColor: "darkblue",
  };

  const handleClick = () => {
    router.push("/nft").then((r) => {});
  };

      const nftsComponents = nfts.map((nft) => (
        <div key={nft.key}>
          <NftPreview data={nft} />
        </div>
      ));

    const logouthandler = async() => {
      console.log(isAuthenticated);
      await logout();
      router.replace("http://localhost:3000/");
      console.log(isAuthenticated);
    }

  // useEffect(() => {
  //   getNFTBalances();
  // });

  return (
    <>
      <div
        style={{
          margin: 10,
          fontSize: 80,
          fontWeight: "bold",
          fontFamily: "Bebas Neue",
        }}
      >
        MY PRODUCTS
      </div>
      <NFTBalances />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ResponsiveGridLayout

        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      >
        {nftsComponents}
      </ResponsiveGridLayout>
      <Button
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
              position: "fixed",
              bottom: "0"
            }}
          >
            {" "}
            LOG OUT{" "}
        </Button>
    </>
  );
}

export default Nfts;
