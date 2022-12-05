import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { router } from "next/client";
import { useContext } from "react";
import selectedNftContext from "../components/selectedNftContext";
import { Grid } from "@mui/material";

function Nft() {

  const backHandler = () => {
    router.push("/nfts");
  };

  const [selectedNft, setSelectedNft] = useContext(selectedNftContext);

  const metadata = selectedNft;
  // const image_split = metadata.image.split('/');
  // let image = "";
  // if(image_split.length > 1){
  //   image = image_split.at(-2)+'/'+image_split.at(-1);
  // } else {
  //   image = metadata.image;
  // }

  var model = "";
  var brand = "";

  metadata.rawMetadata.attributes.forEach(element => {
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
            <img src={"https://ipfs.io/ipfs/" + metadata.rawMetadata.image} className="selectednft-image" ></img>
            <div className="details">
              <h1 className="nft-title font">{metadata.title}</h1>
              <h3 className="subtitile font">Attributes:</h3>
              <Grid container spacing={3}>
                {metadata.rawMetadata.attributes.map((attr,index) => {
                  if(attr.trait_type == 'Background' || attr.trait_type == 'Flair')
                  return (
                    <Grid key={index} item className="attr-item font"> {attr.value} </Grid>
                  )
                })}
              </Grid>
              <h3 className="subtitile font">Model: <div className="subitem font">{model}</div></h3>
              <h3 className="subtitile font">Brand: <div className="subitem font">{brand}</div></h3>
              <h3 className="subtitile font">Description: <div className="subitem font">{metadata.description}</div></h3>
            </div>
        </div>
    </div>
  );
}
export default Nft;
