import { createContext } from "react";
export const CurrentUserContext = createContext();

//  ***** Custom hooks Example *****

// import { createContext, useContext, useEffect, useState } from "react";
// import { api } from "../utils/api";

// export const CurrentUserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState({
//     name: "",
//     job: "",
//   });
//
//   useEffect(() => {
//     api.getUserInfo().then(setCurrentUser);
//   }, []);
//
//   return (
//     <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };
//
// export const useCurrentUser = () => useContext(CurrentUserContext);
