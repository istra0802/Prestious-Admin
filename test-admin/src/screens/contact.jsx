import React from "react";
import { List, Datagrid, TextField, EmailField, NumberField } from "react-admin";
import { dataProvider } from "../dataProvider";

const UserList = (props) => (
  <List {...props}>
    {console.log("props",props)}
    <Datagrid rowClick="edit">
    <TextField source="id" /> 
      <TextField source="name" />
      <EmailField source="email" />
      <NumberField source="number" />
      <TextField source="subject" />
      <TextField source="message" />
    </Datagrid>
  </List>
);
export default UserList;