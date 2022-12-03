import {useContext, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import UserContext from "./userContext";
import NftBalanceContext from "./nftBalancesContext";

function WalletBalance() {

    const [userAddress, setUserAddress,] = useContext(UserContext);
    const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

    const getBalance = async () => {
        //const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(userAddress);
        setNftBalance(ethers.utils.formatEther(balance));
        console.log(nftBalance)
    };

    useEffect( async () => {
        await getBalance()
    }, [])

    return (
        <div>
        </div>
    );
};

export default WalletBalance;