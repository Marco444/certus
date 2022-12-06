import {useContext, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import UserContext from "./userContext";
import NftBalanceContext from "./nftBalancesContext";
import { Network, Alchemy } from "alchemy-sdk";

function WalletBalance() {

    const [userAddress, setUserAddress] = useContext(UserContext);
    const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

    const settings = {
        apiKey: "2tbdoQUg91-YI4w0qyLv_HF9sYieLzLP",
        network: Network.MATIC_MUMBAI,
    };

    const alchemy = new Alchemy(settings);

    useEffect(() => setUserAddress(localStorage.getItem("userWallet")))

    useEffect( () => {



        async function loadNfts() {
            console.log(localStorage.getItem('userWallet'))
            const nfts = await alchemy.nft.getNftsForOwner(localStorage.getItem('userWallet'))
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