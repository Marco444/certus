import { useContext, useEffect, useState } from "react";
import UserContext from "../components/userContext";
import GridLayout from "react-grid-layout";
import { useNFTBalances } from "react-moralis";

function Nfts() {
  const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const layout = [
    { i: "a", x: 100, y: 0, w: 3, h: 2, minW: 4, maxW: 4 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 4, maxW: 4 },
  ];

  const nfts = [
    { key: "a", name: "test" },
    { key: "b", name: "test" },
  ];

  const styles = {
    backgroundColor: "darkblue",
  };

  const nftsPreviews = nfts.map((nft) => (
    <div key={nft.key} style={styles}>
      <a> {nft.name}</a>
    </div>
  ));

  useEffect(() => {
    getNFTBalances();
  }, []);

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
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {nftsPreviews}
      </GridLayout>
    </>
  );
}

export default Nfts;
