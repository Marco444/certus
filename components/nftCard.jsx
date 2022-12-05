import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import {useContext} from "react";
import selectedNftContext from "./selectedNftContext";

function NftCard({ nft }) {

  const router = useRouter();

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);

  const handleClick = () => {
    setSelectedNft(nft);
    router.push('./NftPreview');
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
              {nft.rawMetadata.name}
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