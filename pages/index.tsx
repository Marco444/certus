import type { NextPage } from "next";
import AppMoralis from "./AppMoralis";
import { MoralisProvider } from "react-moralis";

const Home: NextPage = () => {
    return (
        <MoralisProvider serverUrl="https://tlwx9zfwehfu.usemoralis.com:2053/server" appId="NzvHo1OhrnrDrIf1EYSJxA3fy2AZaqaDxYyKAwGr">
            <AppMoralis />
        </MoralisProvider>
  );
};

export default Home;
