import React from "react";
import { useState } from "react";

let UserContext = React.createContext();
export default UserContext;
//this will provide to data to all of its children
export const UserProvider = ({ children }) => {
  const [userlist, setuserlist] = useState([]);
  return (
    <UserContext.Provider value={{ userlist, setuserlist }}>
      {children}
    </UserContext.Provider>
  );
};
