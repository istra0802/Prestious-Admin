import {  Datagrid, ImageField, List, TextField } from 'react-admin';

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="category" />
            <ImageField source="quizImage" />
            {/* <TextField source="name" /> */}
            {/* <ArrayField source="questionSet"><SingleFieldList><ChipField source="question" /></SingleFieldList></ArrayField> */}
        </Datagrid>
    </List>
);