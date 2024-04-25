import * as React from "react";
import { useEffect, useState } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import UserList from "./screens/contact"; 
import UserIconWithBadge from "./componant/UserIconWithBadge";
import Dashboard from "./screens/Dashboard";
import { authProvider } from "./authProvider";

export const App = () => {
  const [newUsersCount, setNewUsersCount] = useState(0);
  const [prevUsersCount, setPrevUsersCount] = useState(0);

  useEffect(() => {
    const fetchNewUsersCount = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users/newuser");
        const data = await response.json();

        console.log("count is th data that is coming ", data);

        setNewUsersCount((data.count) - newUsersCount);
        // console.log(newUsersCount,"rrr")
        setPrevUsersCount(data.count);
      } catch (error) {
        console.log("Error fetching new users count:", error);
      } 
    };
    fetchNewUsersCount();
  }, []);

  // Event listener to reset newUsersCount on logout
  useEffect(() => {
    const handleLogout = () => {
      setNewUsersCount(0);
      setPrevUsersCount(0);
    };

    document.addEventListener("logout", handleLogout);

    return () => {
      document.removeEventListener("logout", handleLogout);
    };
  }, []);

  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
      <Resource
        name="user"
        list={(props) => <UserList {...props} newUsersCount={newUsersCount} />}
        edit={EditGuesser}
        show={ShowGuesser}    
        options={{ label: "Users" }} 
        icon={(props) => <UserIconWithBadge {...props} newUsersCount={newUsersCount} />} // Using UserIconWithBadge component as icon
      />
      <Resource
        name="newsletter"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
};
