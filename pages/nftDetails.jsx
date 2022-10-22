import {router} from "next/router";
 import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useContext} from "react";
import selectedNftContext from "../components/selectedNftContext";

function NftDetails() {


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
        <div >
            <ArrowBackIcon onClick={backHandler} className="backarrow colorfont"/>
        </div>
        <div>
            <h1 className="myProducts font">{metadata.name}</h1>
            <img src={"https://ipfs.io/ipfs/" + image} className="selectednft-image" ></img>
            <p className="selectednft-image-desc">{metadata.description}</p>
            <p className="selectednft-image-desc">token_hash: {selectedNft.token_hash}</p>
        </div>
    </div>
  );
}

export default NftDetails;