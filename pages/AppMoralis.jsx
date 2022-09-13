
import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";

function AppMoralis() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const nftsData = []
    let msg = "Click a button!";
    let user_name = "";
    let address = "";

    useEffect(() => {
        if (isAuthenticated) {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {
        await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
                document.getElementById("user").innerText += "User: "  + user.id + '\t'; 
                document.getElementById("address").innerText += "Address: " + user.get("ethAddress"); 
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        const options = {
            chain: "polygon",
            address: Moralis.User.current().get(),
        };

        const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);

        for (const nft of polygonNFTs.result) {
            console.log(nft.name + nft.metadata + '\n' + nft.token_address);
            nftsData.concat(nft.name + nft.metadata + '\n' + nft.token_address);
        }
        document.getElementById("title").innerText="Logged in!"; 
        const options_wallet = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'test'}};
        fetch('https://deep-index.moralis.io/api/v2/nft/0x20C0398C33dc3EC68fdAE6cFa4F38edA275532b0/15?chain=mumbai&format=decimal', options_wallet)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("data").innerText = JSON.stringify(response);
        })
        .catch(err => console.error(err));
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
        document.getElementById("title").innerText="Logged out!"; 
        document.getElementById("user").innerText = "User: Log in first"; 
        document.getElementById("address").innerText = "Address: Log in first"; 
        document.getElementById("data").innerText = "";
    }

    return (
      <div>
          <h1>Welcome!</h1>
            <button onClick={login}>  Login with Metamask  </button>
            <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
            <h1 id="title">{msg}</h1>
            <div>
                <h3>Data from wallet:</h3>
                <p id="user">{user_name}</p>
                <p id="address">{address}</p>
                <p id="data"></p>
            </div>
        </div>
    );
}

export default AppMoralis;