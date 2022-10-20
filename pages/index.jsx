
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { useContext } from "react";
import UserContext from "../components/userContext";
import { Button } from "@mui/material";


const Home = () => {

  const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);
  const router = useRouter();

  const authenticateHandler = async () => {
    await authenticate();
    router.push("/nfts");
  };

  const routeAbout = () => {
    router.push("/AboutUs");
  }

  const routeHow  = () => {
    router.push("/HowItWorks");
  }

  return (
    <>
      <Stack className="header" direction="row" spacing={4}>
        <Button className="btn-landing font colorfont onPage">
          Home
        </Button>
        <Button className="btn-landing font colorfont" onClick={routeAbout}>
          About us
        </Button>
        <Button className="btn-landing font colorfont" onClick={routeHow}>
          How it works
        </Button>
      </Stack>
      <Stack className="landing" direction="row" spacing={10}>
        <Stack spacing={2}>
          <div className="title-landing font colorfont1">
            CERTUS
          </div>
          <div className="description-landing font colorfont1">
            BLOCKCHAIN BACKED AUTHENTICATION
          </div>
        </Stack>
        <Login className="fingerprint-landing colorfont1" authenticate={authenticateHandler} />
      </Stack>
    </>
  );
};

export default Home;
