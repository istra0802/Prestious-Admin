import React, { useEffect } from "react";
import { List, Datagrid, TextField, EmailField, NumberField, useNotify } from "react-admin";

const UserList = ({ newUsersCount, ...props }) => {

  const notify=useNotify();
  useEffect(() => {
    const fetchNewUsersCount = async () => {
      try {
        if (newUsersCount) {
          notify(
                "New User Is Create",{type:"info"}
          );
        }
      } catch (error) {
        console.error("Error fetching new users count:", error);
      } 
    };

    fetchNewUsersCount();
  }, []);

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <NumberField source="number" />
          <TextField source="subject" />
          <TextField source="message" />
        </Datagrid>
      </List>
    </>
  );
};

export default UserList;
