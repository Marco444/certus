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

import { router } from "next/client";
import { useContext } from "react";

import selectedNftContext from "../components/selectedNftContext";
import { Stack } from "@mui/system";

function Nft() {

  const backHandler = () => {
    router.push("/nfts");
  };

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);


  const metadata = selectedNft.metadata;
  const image_split = metadata.image.split('/');
  let image = "";
  if(image_split.length > 1){
    image = image_split.at(-2)+'/'+image_split.at(-1);
  } else {
    image = metadata.image;
  }
  
  console.log(metadata);
  console.log(image);

  return (
    <div>
      <h1>{metadata.name}</h1>
      <img src={"https://ipfs.io/ipfs/" + image} width="200" height="200"></img>
      <p>{metadata.description}</p>
      <p>token_hash: {selectedNft.token_hash}</p>
    </div>
  );
}

export default Nft;

