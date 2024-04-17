import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const NewsletterList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);