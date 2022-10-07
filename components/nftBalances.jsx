import { useNFTBalances } from "react-moralis";
import { useContext, useEffect } from "react";
import NftBalanceContext from "../components/nftBalancesContext";

const NFTBalances = () => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

  useEffect(() => {
    getNFTBalances();
  }, []);

  useEffect(() => {
    setNftBalance(data);
  }, [data]);

  return <div></div>;
};

export default NFTBalances;
