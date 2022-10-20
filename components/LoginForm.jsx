import { Magic } from 'magic-sdk';

import Web3 from "web3";
import {ethers} from "ethers";
import {useContext} from "react";
import UserContext from "./userContext";
import {router} from "next/router";

export default function LoginForm() {
    const customNodeOptions = {
        rpcUrl: "", // 🦄 Custom RPC Endpoint
        chainId: "",
    };

    const [isAuthenticated, authenticate, user, logout, userAddress, setUserAddress] = useContext(UserContext);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { elements } = e.target;

        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY, {
            network: customNodeOptions,
        });

        const didToken = await magic.auth.loginWithMagicLink({
            email: elements.email.value,
        });
        // 🌐 Send didToken to your backend API

        const provider = new ethers.providers.Web3Provider(magic.rpcProvider);

        const signer = provider.getSigner();

        const address = await signer.getAddress();

        console.log(address);

        setUserAddress(address);

        router.push("./nfts");


        // router.push(`/dashboard`); 👈 Redirect to certain pages
    };
    return (
        <form onSubmit={handleSignIn}>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <button>Log in</button>
        </form>
    );
}