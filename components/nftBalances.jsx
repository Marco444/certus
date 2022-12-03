import { useNFTBalances } from "react-moralis";
import { useContext, useEffect } from "react";
import NftBalanceContext from "../components/nftBalancesContext";
import UserContext from "./userContext";

const NFTBalances = () => {
  // const { getNFTBalances, data } =
  //   useNFTBalances();

  // //aca si se borra todos los cosas se ROMPE, es por el hecho de ser
  // //un array destructuring. Si es feo, se tiene que restructurar el
  // //useContext
  // const [
  //   isAuthenticated,
  //   authenticate,
  //   user,
  //   logout,
  //   userAddress,
  //   setUserAddress,
  // ] = useContext(UserContext);
  // const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

  // useEffect (  () => {
  //   getNFTBalances({
  //     params: {address: userAddress, chain: "mumbai"}
  //   })

  // }, [userAddress]);

  // useEffect(() => {
  //   setNftBalance(data);
  // }, [data]);

  return <div></div>;
};

export default NFTBalances;
