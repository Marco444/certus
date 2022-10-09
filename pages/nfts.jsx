import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "../components/userContext";
import NftBalanceContext from "../components/nftBalancesContext";

import NFTBalances from "../components/nftBalances";
import NftCard from "../components/nftCard";

function Nfts() {
  const [logout, isAuthenticating] = useContext(UserContext);
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);
  const [nfts, setNfts] = useState([]);

  const storeNfts = () => {
    if (
      nftBalance === undefined ||
      nftBalance === null ||
      nftBalance.result === null ||
      nftBalance.result === undefined
    )
      return null;
    setNfts(nftBalance.result);
  };

  useEffect(() => {
    storeNfts(nftBalance);
  }, [nftBalance]);

  return (
    <>
      <NFTBalances />
      <div className="myProducts">
        MY PRODUCTS
      </div>
      <div className="cards">
        {nfts.map(function (res) {
          return <NftCard key={res.token_hash} metadata={res} />;
        })}
      </div>
    </>
  );
}

export default Nfts;
{
  /* <Stack
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
        </Stack> */
}
