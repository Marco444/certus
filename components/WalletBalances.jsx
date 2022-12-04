import {useContext, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import UserContext from "./userContext";
import NftBalanceContext from "./nftBalancesContext";
import { Network, Alchemy } from "alchemy-sdk";

function WalletBalance() {

    const [userAddress, setUserAddress,] = useContext(UserContext);
    const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

    const settings = {
        apiKey: "2tbdoQUg91-YI4w0qyLv_HF9sYieLzLP",
        network: Network.MATIC_MUMBAI,
    };

    const alchemy = new Alchemy(settings);

    useEffect( () => {

        async function loadNfts() {
            const nfts = await alchemy.nft.getNftsForOwner(userAddress)
            setNftBalance(nfts.ownedNfts)
        }
      loadNfts()
     }, [])

    return (
        <div>
        </div>
    );
};

export default WalletBalance;