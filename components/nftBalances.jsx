import { useNFTBalances } from "react-moralis";
import { useContext, useEffect } from "react";
import NftBalanceContext from "../components/nftBalancesContext";
import UserContext from "./userContext";

const NFTBalances = () => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const [userAddress, setUserAddress] = useContext(UserContext);
  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

  useEffect(() => {
    getNFTBalances({params: {address: userAddress, chain: "mumbai"}});
  }, []);

  useEffect(() => {
    setNftBalance(data);
  }, [data]);

  return <div></div>;
};

export default NFTBalances;
