
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
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
        document.getElementById("title").innerText="Logged out!"; 
        document.getElementById("user").innerText = "User: Log in first"; 
        document.getElementById("address").innerText = "Address: Log in first"; 
    }

  return (
      <div>
          <h1>Moralis Hello World!</h1>
            <button onClick={login}>Moralis Metamask Login</button>
            <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
            <h1 id="title">{msg}</h1>
            <div>
                <h3>Data from wallet:</h3>
                <p id="user">{user_name}</p>
                <p id="address">{address}</p>
            </div>
        </div>
    );
}

export default AppMoralis;