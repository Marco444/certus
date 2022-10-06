import React, { useState, useEffect } from "react";
import Link from "next/link";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LabelIcon from "@mui/icons-material/Label";
import StarsIcon from "@mui/icons-material/Stars";
import BallotIcon from "@mui/icons-material/Ballot";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewListIcon from "@mui/icons-material/ViewList";
import RefreshIcon from "@mui/icons-material/Refresh";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SellIcon from "@mui/icons-material/Sell";
import TocIcon from "@mui/icons-material/Toc";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Button } from '@mui/material';

function Nft({}) {
  const handler = () => {
    let newP = document.createElement("p");
    newP.innerHTML = "By you";
    newP.style = "none";
    const description = document.getElementById("description-btn");
    description.append(newP);
  };

  const route = () => {
    <a href="http://localhost:3000/"></a>;
  };

  const GobackButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={"http://localhost:3000/"} onClick={onClick} ref={ref}>
        <ArrowBackIcon className="backarrow colorfont" />
      </a>
    );
  });

  return (
    <div>
      <div className="column1">
        <button id="description-btn" className="nft-features-btn colorfont">
          <div className="align">
            <InsertLinkIcon />
            <div className="heart">
              <p>1</p>
              <FavoriteIcon />
            </div>
          </div>
        </button>
        <div>
          <img className="nft-image" src={"images/shoe.png"} />
        </div>
        <button id="description-btn" className="nft-features-btn colorfont">
          <div className="align">
            <DehazeIcon />
            <div className="align1">Description</div>
            {/* <div>
                            <p>By <b>you</b></p>
                            <p className='description'>ADIDAS Women’s Cloudfoam Racer</p>
                        </div> */}
          </div>
        </button>
        <button id="properties-btn" className="nft-features-btn colorfont">
          <div className="align">
            <LabelIcon />
            <div className="align1">Properties</div>
          </div>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </button>
        <button id="levels-btn" className="nft-features-btn colorfont">
          <div className="align">
            <StarsIcon />
            <div className="align1">Levels</div>
          </div>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </button>
        <button id="levels-btn" className="nft-features-btn colorfont">
          <div className="align">
            <ViewListIcon />
            <div className="align1">About NFT</div>
          </div>
          <div className="arrow">
            <KeyboardArrowDownIcon />
          </div>
        </button>
        <button id="details-btn" className="nft-features-btn last colorfont">
          <div className="align">
            <BallotIcon />
            <div className="align1">Details</div>
          </div>
          <div className="arrow">
            <KeyboardArrowDownIcon id="icons-btn" />
          </div>
        </button>
      </div>
      <div className="column2">
        <div className="topbar">
          <a className="link fixedposition">NFT - MmbVVzxA4W</a>
          <div className="icons-bar colorfont">
            <RefreshIcon className="shareicons" />
            <div className="divider" />
            <SendIcon className="shareicons" />
            <div className="divider" />
            <ShareIcon className="shareicons" />
            <div className="divider" />
            <MoreVertIcon className="shareicons" />
          </div>
        </div>
        <h2 className="title fixedposition colorfont">Black and White #1</h2>
        <div className="owned">
          <p className="fixedposition colorfont1">Owned by</p>
          <p className="link fixedposition you">you</p>
          <div className="colorfont1 fixedposition viewicon">
            <div className="align">
              <RemoveRedEyeIcon />
              <p>1 view</p>
            </div>
            <div className="align">
              <FavoriteIcon />
              <p>1 favorite</p>
            </div>
          </div>
        </div>
        <div className="col1 fixedposition colorfont">
          <button className="nft-features-btn last">
            <div className="align">
              <ShowChartIcon />
              <div className="align1">Price History</div>
            </div>
            <div className="arrow">
              <KeyboardArrowDownIcon />
            </div>
          </button>
          <br />
          <button className="nft-features-btn last">
            <div className="align">
              <SellIcon />
              <div className="align1">Listings</div>
            </div>
            <div className="arrow">
              <KeyboardArrowDownIcon />
            </div>
          </button>
          <br />
          <button className="nft-features-btn last">
            <div className="align">
              <TocIcon />
              <div className="align1">Offers</div>
            </div>
            <div className="arrow">
              <KeyboardArrowDownIcon />
            </div>
          </button>
        </div>
      </div>
      <GobackButton > </GobackButton>
      
    {/* <Link href="/" passHref>
      <Button className="logout" onClick={logout}> LOG OUT </Button>
    </Link> */}
      </div>
  );
}

export default Nft;
