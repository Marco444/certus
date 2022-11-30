import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";

function Header({ selected }) {
  const router = useRouter();

  const buttonSx = {
    fontSize: 22,
    fontFamily: "Bebas Neue",
    color: "#010913",
    "&:hover": {
      fontSize: 22,
      backgroundColor: "#11e3ab",
    },
  };
  return (
    <Stack direction="row" spacing={4}>
      <Button
        sx={buttonSx}
        style={{ backgroundColor: selected == "home" ? "#11e3ab" : "white" }}
        onClick={() => router.push("./")}
      >
        Home
      </Button>
      <Button
        sx={buttonSx}
        style={{ backgroundColor: selected == "aboutUs" ? "#11e3ab" : "white" }}
        onClick={() => router.push("/AboutUs")}
      >
        About us
      </Button>
      <Button
        sx={buttonSx}
        style={{
          backgroundColor: selected == "howItWorks" ? "#11e3ab" : "white",
        }}
        onClick={() => router.push("/HowItWorks")}
      >
        How it works
      </Button>
    </Stack>
  );
}

export default Header;
