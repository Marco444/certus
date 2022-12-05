import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import { router } from "next/router";
import {useContext} from "react";
import NftBalanceContext from "./nftBalancesContext";
import selectedNftContext from "./selectedNftContext";

function NftCard({ key,nft }) {

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);

  console.log(nft)

  const handleClick = () => {
    setSelectedNft(metadata);
    router.push("/nftDetail");
  };


  return (
    <>
      <div onClick={handleClick} className="card-container" style={{width: 300}}>
        <div className="card">
          <img
            className="card-image"
            src={"https://ipfs.io/ipfs/" + nft.rawMetadata.image}
          />
          <div className="card-info">
            <h1 className="card-title">
              { nft.rawMetadata.name}
            </h1>
            <div className="card-id">ID: <div className="card-tokenid">{nft.tokenId}</div></div>
            <div>
              {nft.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftCard;
