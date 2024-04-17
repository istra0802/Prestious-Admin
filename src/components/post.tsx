
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";

import { useRecordContext} from "react-admin";

const postFilters = [
    <TextInput key="q" source="q" label="Search" alwaysOn />,
    <ReferenceInput key="userId" source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"  />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


const PostTitle = () => {
      const record = useRecordContext();
     return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
      <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
);


  export const PostCreate = () => (
    <Create>
       <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
         <TextInput source="body" multiline rows={5} />
       </SimpleForm>
    </Create>
    );


//React-admin can use Input components to create a multi-criteria search engine in the list view. Pass an array of such Input components to the List filters prop to enable filtering