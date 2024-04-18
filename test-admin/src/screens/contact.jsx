import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  Filter,
  TextInput,
  FilterButton,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);


const UserList = (props) => (
  <List {...props} filters={<UserFilter />} perPage={10}>
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
