import { useMoralis } from "react-moralis";
import { createContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <UserContext.Provider value={[isAuthenticated, authenticate, user,logout]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;