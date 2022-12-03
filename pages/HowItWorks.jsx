import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { useContext } from "react";
import UserContext from "../components/userContext";
import Header from "../components/Header";

function HowItWorks() {
  //const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);

  const authenticateHandler = async () => {
    //await authenticate();
    router.push("/nfts");
  };

  return (
    <>
      <Header selected={"howItWorks"} />
      <div className="font aboutus-title">How it works</div>
      <p className="font howitworks">
        First you have to login into Metamask. Once you login you will be able
        to see all your NFTs. To do that you can either go to the home page and
        click on the fingerprint or just click{" "}
        <button className="link login-btn" onClick={authenticateHandler}>
          here
        </button>
        .
      </p>
    </>
  );
}

export default HowItWorks;
