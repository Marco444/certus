import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import Profile from "../components/Profile";

function AboutUs () {

    const routeHome = () => {
        router.push("./");
    }

    const routeHow  = () => {
        router.push("/HowItWorks");
    }

    return (
        <>
        <Stack className="header" direction="row" spacing={4}>
            <Button className="btn-landing font colorfont" onClick={routeHome}>
                Home
            </Button>
            <Button className="btn-landing font colorfont">
                About us
            </Button>
            <Button className="btn-landing font colorfont" onClick={routeHow}>
                How it works
            </Button>
        </Stack>
        <div className="font aboutus-title">About us</div>
        <p className="font aboutus">
            We are a group of software engineer students at ITBA. 
            Certus is a platform dedicated to certify the authenticity of goods and services with the mission of reducing illegal copies and imitations.
            Here you will be able to visualize all your NFTs regarding the products that you own.
            But first there are a couple things to do, please checkout <a className="howitworks">How it works</a>.
        </p>
        <div className="font us-title">Us</div>
        <Stack spacing={4} className="us">
            <Stack direction="row" spacing={8}>
                <Profile img="./images/vicky.png"/>
                <Profile img="./images/scili.png"/>
                <Profile img="./images/ippo.png"/>
            </Stack>
            <Stack className="gayba">
                <Profile img="./images/gayba.png"/>
            </Stack>
            <Stack direction="row" spacing={8}>
                <Profile img="./images/tincho.png"/>
                <Profile img="./images/tobi.png"/>
                <Profile img="./images/laucha.png"/>
            </Stack>
        </Stack>
        </>
    );
}

export default AboutUs;