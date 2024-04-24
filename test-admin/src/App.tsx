import * as React from "react";
import { useEffect, useState } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Login,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import UserList from "./screens/contact"; 
import UserIconWithBadge from "./componant/UserIconWithBadge";
import Dashboard from "./screens/Dashboard";

export const App = () => {

  const [newUsersCount, setNewUsersCount] = useState(0);

  useEffect(() => {
    const fetchNewUsersCount = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users/newuser");
        const data = await response.json();
        setNewUsersCount(data.count);
      } catch (error) {
        console.log("Error fetching new users count:", error);
      } 
    };
    fetchNewUsersCount();
  }, []);
 
  return (
    <Admin dataProvider={dataProvider}  loginPage={Login} dashboard={Dashboard} >
      <Resource
        name="user"
        list={(props)=><UserList{...props} newUsersCount={newUsersCount}/>}
        edit={EditGuesser}
        show={ShowGuesser}    
        options={{ label: "Users" }} 
        icon={(props)=><UserIconWithBadge{...props} newUsersCount={newUsersCount} />} // Using UserIconWithBadge component as icon
      />
      <Resource
        name="newsletter"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />

      {/* <Resource
      name="Dashboard"
      options={{label:"Dashboard"}}
      list={Dashboard}
      /> */}
    </Admin>
  );
};
