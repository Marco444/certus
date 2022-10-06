import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Link from 'next/link';
import Image from 'next/image';

function NftCard(){
    return (
      <>
      <div className="card-container">
        <div className="card">
          <Image className="image" src={"/images/shoe.png"} height={1300} width={1300} />
          <div className="card-info">
            <h1 className="card-title">Black and White #1</h1>
            <div className="card-creator">Created by <a href="">you</a></div>
          </div>
        </div>
      </div>
  </>
    )
}

export default NftCard;

