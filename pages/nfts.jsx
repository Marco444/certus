import { useContext, useEffect, useState } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
import UserContext from "../components/userContext";
import { useNFTBalances } from "react-moralis";

function Nfts() {
  const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const layout = [
    { i: "a", x: 1, y: 0, h: 1, w: 2 },
    { i: "b", x: 2, y: 0, h: 1, w: 3 },
  ];

  const nfts = [
    { key: {}, name: "test" },
    { key: "b", name: "test" },
  ];

  const styles = {
    backgroundColor: "darkblue",
  };

  const buildNftsPreviews = () => {};

  const nftsComponents = nfts.map((nft) => (
    <div key={nft.key} style={styles}>
      <a> {nft.name}</a>
    </div>
  ));

  useEffect(() => {
    buildNftsPreviews();
  }, [data]);

  useEffect(() => {
    getNFTBalances();
  });

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
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      >
        {nftsComponents}
      </ResponsiveGridLayout>
    </>
  );
}

export default Nfts;
