import {  Datagrid, ImageField, List, TextField , 
 
 Create,
    Edit,

    SimpleForm,
    ReferenceInput,
    TextInput,
    EditButton,} from 'react-admin';

export const ContestList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="category" />
            <ImageField source="quizImage" />
            <TextField source="name" />
            <EditButton />
            {/* <ArrayField source="questionSet"><SingleFieldList><ChipField source="question" /></SingleFieldList></ArrayField> */}
        </Datagrid>
    </List>
);

export const contestEdit = () => (
    <Edit >
      <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
);


export const contestCreate = () => (
    <Create>
       <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
         <TextInput source="body" multiline rows={5} />
       </SimpleForm>
    </Create>
    );
