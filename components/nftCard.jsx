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
    router.push("/nftDetails");
  };

  const image_split = metadata.image.split('/');
  let image = "";
  if(image_split.length > 1){
    image = image_split.at(-2)+'/'+image_split.at(-1);
  } else {
    image = metadata.image;
  }

  console.log(image);
  return (
    <>
      <div onClick={handleClick} className="card-container" style={{width: 300}}>
        <div className="card">
          <img
            className="card-image"
            src={"https://ipfs.io/ipfs/" + image}
          />
          <div className="card-info">
            <h1 className="card-title">
              {metadata.metadata === null ? null : metadata.metadata.name}
            </h1>
            <div>
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
