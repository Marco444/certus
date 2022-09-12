
import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";

function AppMoralis() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

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

        for (var nft of polygonNFTs.result) {
            console.log(nft.name + '\n' + nft.token_address);
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

  return (
      <div>
          <h1>Moralis Hello World!</h1>
            <button onClick={login}>Moralis Metamask Login</button>
            <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
        </div>
    );
}

export default AppMoralis;