import { useNFTBalances } from "react-moralis";
import { useContext, useEffect } from "react";
import NftBalanceContext from "../components/nftBalancesContext";
import UserContext from "./userContext";

const NFTBalances = () => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const [userAddress, setUserAddress] = useContext(UserContext);
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

  useEffect ( () => {
    if (userAddress === "") {
      getNFTBalances();
    } else {
      getNFTBalances({
        params: {
          address: "0xb046fc99362136e8d232382302559A7d350cb0D9",
          chain: "mumbai",
        },
      });
    }
  }, []);

  useEffect(() => {
    setNftBalance(data);
  }, [data]);

  return <div></div>;
};

export default NFTBalances;
