import {router} from "next/router";
 import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useContext} from "react";
import selectedNftContext from "../components/selectedNftContext";

function NftDetails() {

  const backHandler = () => {
    router.push("/nfts");
  };

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);
 
  const image = "";
  console.log(selectedNft);
  console.log(image);

  return (
    <div>
        <div>
            <ArrowBackIcon onClick={backHandler} className="backarrow colorfont"/>
        </div>
        <div>
            <h1 className="myProducts font">{selectedNft.name}</h1>
            <img src={"https://ipfs.io/ipfs/" + image} className="selectednft-image" ></img>
            <p className="selectednft-image-desc">{selectedNft.description}</p>
            <p className="selectednft-image-desc">token_hash: {selectedNft.token_hash}</p>
        </div>
    </div>
  );
}

export default NftDetails;