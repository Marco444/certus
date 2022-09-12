import { useMetaMask } from "metamask-react";
import {useMoralisWeb3Api} from "react-moralis";

export const MetaMask = async () =>{} /*{

    const {status, connect, account, chainId, ethereum} = useMetaMask();
    const Web3Api = useMoralisWeb3Api();

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available, please download the extension</div>

    if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") return <div>Connecting...</div>

    if (status === "connected") {


        const str: string = account;

        const options = {
            chain: "polygon",
            address: str,
        };



        const polygonNFTs = await Web3Api.account.getNFTs(options);

        const nfts: any = []
        for (const nft in polygonNFTs.result) {
            nfts.concat(nft);
            console.log(nft);
        }

        return <div>Connected account {account} on chain ID {chainId}</div>
        //return <div>hello</div>
    }

    return <div> hello </div>;
}*/