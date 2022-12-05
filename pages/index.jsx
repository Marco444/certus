import { Stack } from "@mui/system";
import Login from "../components/Login";
import Header from "../components/Header";

const Home = () => {

  return (
    <>
      <Header selected={"home"}/>
      <Stack className="landing" direction="row" spacing={10}>
        <Stack spacing={2}>
          <div className="title-landing font colorfont1">CERTUS</div>
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
