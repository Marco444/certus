import { createContext, useState } from "react";

const NftBalanceContext = createContext(undefined);

export const NftBalanceProvider = ({ children }) => {
  const [nftBalance, setNftBalance] = useState([]);

  return (
    <NftBalanceContext.Provider value={[nftBalance, setNftBalance]}>
      {children}
    </NftBalanceContext.Provider>
  );
};

export default NftBalanceContext;
