import { Stack } from "@mui/material";
import { router } from "next/client";

function NftPreview({ data }) {
  const clickHandler = () => {
    router.push("/nft");
  };

  return (
    <>
      <Stack onClick={clickHandler}>
        <span style={{ fontFamily: "Bebas Neue", fontSize: 32, padding: 3 }}>
          {" "}
          {data.name}{" "}
        </span>
        <img style={{ width: 50, height: 50 }} src={data.img} />
      </Stack>
    </>
  );
}

export default NftPreview;
