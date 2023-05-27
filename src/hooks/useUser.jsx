import React, { createContext, useContext, useEffect, useState } from "react";
import UserApi from "../api/UserApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({ token });
  const isLogged = !!user.token;

  useEffect(() => {
    if (token) {
      const userApi = new UserApi(token);
      userApi
        .getMe()
        .then((response) => {
          setUser({ ...response, token });
        })
        .catch((error) => {
          setUser({});
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
