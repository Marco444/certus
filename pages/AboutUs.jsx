import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import Profile from "../components/Profile";
import { useRouter } from "next/router";
import Header from "../components/Header";

function AboutUs() {
  return (
    <>
      <Header selected={"aboutUs"} />
      <div className="font aboutus-title">About us</div>
      <Stack direction="row" spacing={10}>
        <p className="fontText aboutus">
          We are a group of software engineer students at ITBA. Certus is a
          platform dedicated to certify the authenticity of goods and services
          with the mission of reducing illegal copies and imitations. Here you
          will be able to visualize all your NFTs regarding the products that
          you own.
        </p>
        <img className="logo" src="./images/logo.png" />
      </Stack>
      <div className="font us-title">Us</div>
      <Stack spacing={4} className="us">
        <Stack direction="row" spacing={8}>
          <Profile img="./images/vicky.png" />
          <Profile img="./images/scili.png" />
          <Profile img="./images/ippo.png" />
        </Stack>
        <Stack className="gayba">
          <Profile img="./images/gayba.png" />
        </Stack>
        <Stack direction="row" spacing={8}>
          <Profile img="./images/tincho.png" />
          <Profile img="./images/tobi.png" />
          <Profile img="./images/laucha.png" />
        </Stack>
      </Stack>
    </>
  );
}

export default AboutUs;
