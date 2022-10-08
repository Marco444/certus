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

  return (
    <>
      <div onClick={handleClick} className="card-container">
        <div className="card">
          <img
            className="image"
            src={"https://ipfs.io/ipfs/" + metadata.image}
            height="130"
            width="130"
          />
          <div className="card-info">
            <h1 className="card-title">Black and White #1</h1>
            <div className="card-creator">
              Created by <a href="">you</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftCard;
