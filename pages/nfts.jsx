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

  // const nftsComponents = balances.map((nft) => (
  //   <div>
  //     <NftPreview data={nft} />
  //   </div>
  // ));

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
    </>
  );
}

export default Nfts;
