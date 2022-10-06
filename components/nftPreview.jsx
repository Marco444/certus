import { Stack } from "@mui/material";

function NftPreview({ name }) {
  return (
    <>
      <Stack>
        <span>{{ name }}</span>
      </Stack>
    </>
  );
}

export default NftPreview;
