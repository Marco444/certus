import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { useContext } from "react";
import UserContext from "../components/userContext";

function HowItWorks () {

    const [isAuthenticated, authenticate, user, logout] = useContext(UserContext);

    const authenticateHandler = async () => {
        await authenticate();
        router.push("/nfts");
    };

    const router = useRouter();

    const routeHome = () => {
        router.push("./");
    };

    const routeAbout = () => {
        router.push("/AboutUs");
    };

    return (
        <>
        <Stack className="header" direction="row" spacing={4}>
            <Button className="btn-landing font colorfont" onClick={routeHome}>
                Home
            </Button>
            <Button className="btn-landing font colorfont" onClick={routeAbout}>
                About us
            </Button>
            <Button className="btn-landing font colorfont onPage">
                How it works
            </Button>
        </Stack>
        <div className="font aboutus-title">How it works</div>
        <p className="font howitworks">
            First you have to login into Metamask. 
            Once you login you will be able to see all your NFTs.
            To do that you can either go to the home page and click on the fingerprint or just click <button className="link login-btn" onClick={authenticateHandler}>here</button>.
        </p>
        </>
    )
}

export default HowItWorks;