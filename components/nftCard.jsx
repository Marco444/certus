import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import { router } from "next/router";
import {useContext} from "react";
import NftBalanceContext from "./nftBalancesContext";
import selectedNftContext from "./selectedNftContext";

function NftCard({ metadata }) {


  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);

  const handleClick = () => {
    console.log(metadata);
    setSelectedNft(metadata);
    router.push("/nft");
  };



  // console.log(metadata.image);
  return (
    <>
      <div onClick={handleClick} className="card-container">
        <div className="card">
          <img
            className="card-image"
            src={"https://ipfs.io/ipfs/" + metadata.image}
          />
          <div className="card-info">
            <h1 className="card-title">
              {metadata.metadata === null ? null : metadata.metadata.name}
            </h1>
            <div className="card-creator">
              {metadata.metadata === null
                ? null
                : metadata.metadata.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftCard;
