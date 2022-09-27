import { Stack } from "@mui/system";
import { Button } from "@mui/material";

function Nfts({ handler, logout }) {
  return (
    <>
      <Stack
        style={{
          margin: 50,
        }}
      >
        <div
          style={{
            margin: 50,
            fontSize: 133,
            fontWeight: "bold",
            fontFamily: "Bebas Neue",
          }}
        >
          MY PRODUCTS:
        </div>
        <Button
          onClick={() => handler(1)}
          sx={{
            ":hover": {
              color: "#69f0ae",
              bgcolor: "#2bbd7e",
            },
            color: "black",
            bgcolor: "gray",
            height: 100,
            width: 1000,
          }}
        >
          {" "}
          VIEW NFT{" "}
        </Button>
        <Button onClick={logout}> LOG OUT </Button>
      </Stack>
    </>
  );
}

export default Nfts;
