import { Stack } from "@mui/material";
import {router} from "next/client";

function NftPreview({ data }) {

    const clickHandler = () => {
        router.push("/nft");
    }

  return (
    <>
      <Stack onClick={clickHandler}>
        <span> {data.name} </span>
          <img src={data.img} />
      </Stack>
    </>
  );
}

export default NftPreview;
