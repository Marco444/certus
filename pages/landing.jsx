import { Stack } from "@mui/system";

import Login from "../components/Login";
import Test from "../components/test";

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
        <Login />
      </Stack>
    </>
  );
}

export default Landing;
