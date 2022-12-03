import { useMoralis } from "react-moralis";
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // const { isAuthenticated,user, authenticate,  logout, account } = useMoralis();
  const [userAddress, setUserAddress] = useState("");

  return (
    // <UserContext.Provider value={[isAuthenticated, authenticate, user,logout, userAddress, setUserAddress, account]}>
    <UserContext.Provider value={[userAddress, setUserAddress]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;