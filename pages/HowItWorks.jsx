import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { useContext } from "react";
import UserContext from "../components/userContext";
import Header from "../components/Header";

function HowItWorks() {

  const authenticateHandler = async () => {
    router.push("/nfts");
  };

  return (
    <>
      <Header selected={"howItWorks"} />
      <div className="font aboutus-title">How it works</div>
      <p className="font howitworks">
        First you have to login. You will have to place an e-mail. Then, if you don `&apos;`t have a 
        wallet linked with that e-mail, you will have to authorice the app through a mail.
        Onces you `&apos;`ve done that, you will be able to see all your NFTs. To do that please visit 
        the home page.
      </p>
    </>
  );
}

export default HowItWorks;
