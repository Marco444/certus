import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useRouter} from "next/router";
import { useContext } from "react";
import selectedNftContext from "../components/selectedNftContext";
import { Grid } from "@mui/material";

function NftPreview() {

  const router = useRouter();

  const backHandler = () => {
    router.push("./nfts");
  };

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);

  var model = "";
  var brand = "";

  selectedNft.rawMetadata.attributes.forEach(element => {
    if(element.trait_type == 'Model')
      model = element.value
    if(element.trait_type == 'Brand')
      brand = element.value
  });
  console.log(selectedNft);

  return (
    <div>

        <div >
            <ArrowBackIcon onClick={backHandler} className="backarrow colorfont"/>
        </div>
        <div style={{fontFamily: "Bebas Neue", fontSize: 50, marginLeft: 70, marginTop: 20, marginBottom: -20}}>Page title</div>
        <div className="nft-detail">
            <img src={"https://ipfs.io/ipfs/" + selectedNft.rawMetadata.image} className="selectednft-image" ></img>
            <div className="details">
              <h1 className="nft-title font">{selectedNft.title}</h1>
              <h3 className="subtitile font">Attributes:</h3>
              <Grid container spacing={3}>
                {selectedNft.rawMetadata.attributes.map((attr,index) => {
                  if(attr.trait_type == 'Background' || attr.trait_type == 'Flair')
                  return (
                    <Grid key={index} item className="attr-item font"> {attr.value} </Grid>
                  )
                })}
              </Grid>
              <h3 className="subtitile font">Model: <div className="subitem font">{model}</div></h3>
              <h3 className="subtitile font">Brand: <div className="subitem font">{brand}</div></h3>
              <h3 className="subtitile font">Description: <div className="subitem font">{selectedNft.description}</div></h3>
            </div>
        </div>
    </div>
  );
}

export default NftPreview;