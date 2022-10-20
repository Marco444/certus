import { useMoralis } from "react-moralis";
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const { isAuthenticated,user, authenticate,  logout } = useMoralis();
  const [userAddress, setUserAddress] = useState("");

  return (
    <UserContext.Provider value={[isAuthenticated, authenticate, user,logout, userAddress, setUserAddress]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;