import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Link from 'next/link';
import Image from 'next/image';

function NftCard(){
    return (
        // <Stack>
        //   <img className="nft-image" src={"images/shoe.png"} />
        // </Stack>
    // <div className="card">
    //   <Image className="image" src={image} height={700} width={1300} />
    //   <Link href={`/category/${name.toLowerCase()}`}>
    //     <div classNameName="info">
    //       <h3>{name}</h3>
    //       <p>SHOP NOW</p>
    //     </div>
    //   </Link>
    // </div>
    <>
    <div className="card-container">
    <div className="card card-1">
    <div className="card-img"></div>
    <Image className="image" src={"/images/shoe.png"} height={1300} width={1300} />
    <a href="/images/shoe.png" className="card-link">
      <div className="card-img-hovered"></div>
    </a>
    <div className="card-info">
      <div className="card-about">
        <a className="card-tag tag-news">NEWS</a>
      <div className="card-time">6/11/2018</div>
      </div>
      <h1 className="card-title">There have been big Tesla accident at New Jersey</h1>
      <div className="card-creator">by <a href="">Sardorbek Usmonov</a></div>
    </div>
  </div>
  </div>
  </>
    )
}

export default NftCard;

