import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import { router } from "next/router";

function NftCard({ metadata }) {
  console.log(metadata);

  const handleClick = () => {
    router.push("/nft");
  };

  // console.log(metadata.image);

  // let imageLink = ""

  console.log(metadata.image.slice(29));

  return (
    <>
      <div onClick={handleClick} className="card-container">
        <div className="card">
          <img
            className="card-image"
            src={"https://ipfs.io/ipfs/" + metadata.image.slice(29)}
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
