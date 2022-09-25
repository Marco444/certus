import { Stack } from "@mui/system";
import Image from "next/image";
import image from "/public/products.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

function Landing() {
  return (
    <>
      <Stack style={{ paddingLeft: 333, paddingTop: 300 }} direction="row">
        <Stack spacing="2">
          <div
            style={{
              fontSize: 133,
              fontWeight: "bold",
              fontFamily: "Bebas Neue",
            }}
          >
            CERTUS
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "Bebas Neue",
            }}
          >
            BLOCKCHAIN BACKED AUTHENTICATION
          </div>
        </Stack>
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          sx={{
            ":hover": {
              color: "#69f0ae",
              bgcolor: "#2bbd7e",
            },
            color: "black",
            height: 60,
            width: 60,
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          <Fingerprint sx={{ fontSize: 60 }} />
        </IconButton>
      </Stack>
    </>
  );
}

export default Landing;
