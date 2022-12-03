import { router } from "next/router";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function createNewProduct(){

    const myCollection = () => {
        router.push("./nfts");
    }

    const myProducts = () => {
        router.push("./myProducts");
    }


  const logouthandler = () => {
    router.push("./");
  }

    return (
    <>
    <Stack sx={{padding: 2, margin: 3}} spacing={4} direction={"row"} >
        <button style={{fontFamily: "Bebas Neue", fontSize: 35, backgroundColor: "white",border:"none", textDecoration: "underline"}}  onClick={myCollection}>
            MY COLLECTION
        </button>
        <button style={{fontFamily: "Bebas Neue", fontSize: 35,border:"none",borderRadius:8,backgroundColor:"white", textDecoration: "underline"}}  onClick={myProducts}>
            MY PRODUCTS
        </button>
        <button style={{fontFamily: "Bebas Neue", fontSize: 35, backgroundColor: "#11e3ab",border:"none",border:"none",borderRadius:8}}>
            Create new product
        </button>
        <Button startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(userAddress)}>
            copy wallet address
        </Button>
    </Stack>
    <Button onClick={logouthandler} className="logout-btn">
        {" "}
        LOG OUT{" "}
    </Button>
    </>
    )
};
