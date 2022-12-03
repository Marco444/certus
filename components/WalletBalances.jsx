import {useContext, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import UserContext from "./userContext";
import NftBalanceContext from "./nftBalancesContext";

function WalletBalance() {

    const [userAddress, setUserAddress,] = useContext(UserContext);
    const [nftBalance, setNftBalance] = useContext(NftBalanceContext);

    useEffect( () => {

        async function getBalance(){
            console.log("load balance")
            const provider = new ethers.providers.Web3Provider(window.ethereum);
           // const provider = ethers.providers.Web3Provider(window.ethereum/window.web3)
            const contract = new ethers.Contract(tokenContractAddress, genericErc20Abi, provider);
            const balance = (await contract.balanceOf((await provider.getSigners())[0].address)).toString();
            setNftBalance(balance)
            console.log(balance)
        }

        getBalance();
    }, [])

    return (
        <div>
        </div>
    );
};

export default WalletBalance;