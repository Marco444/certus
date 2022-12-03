import { useMoralis } from "react-moralis";
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userAddress, setUserAddress] = useState("");

  return (
    <UserContext.Provider value={[userAddress, setUserAddress]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;