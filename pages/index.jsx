import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { useContext } from "react";
import UserContext from "../components/userContext";
import { Button } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const [
    isAuthenticated,
    authenticate,
    user,
    logout,
    userAddress,
    setUserAddress,
  ] = useContext(UserContext);
  const router = useRouter();

  const routeAbout = () => {
    router.push("/AboutUs");
  };

  const routeHow = () => {
    router.push("/HowItWorks");
  };

  const buttonSx = {
    fontSize: 18,
    textDecoration: "underline",
    color: "#010913",
    '&:hover': { 
      fontSize: 18,
      backgroundColor: "#11e3ab"
    }
  }

  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button sx={buttonSx} >Home</Button>
        <Button onClick={routeAbout}>
          About us
        </Button>
        <Button onClick={routeHow}>
          How it works
        </Button>
      </Stack>
      <Stack className="landing" direction="row" spacing={10}>
        <Stack spacing={2}>
          <div className="title-landing font colorfont1">CERTUSssssss</div>
          <div className="description-landing font colorfont1">
            BLOCKCHAIN BACKED AUTHENTICATION
          </div>
        </Stack>
        <Login className="fingerprint-landing colorfont1" />
      </Stack>
    </>
  );
};

export default Home;
