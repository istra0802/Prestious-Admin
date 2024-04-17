
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  Button
} from "react-admin";

const UserList = (props) => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };




  return (
    <div>
      <List {...props} >
        <Button label="Add Category" onClick={handleButtonClick} />
        <Datagrid>
          <ImageField
            source="quizImage"
            title="Avatar"
            style={{ width: "100%", height: "100%", margin: "auto" }}
            label="Image"
          />
          <TextField source="category" label="Category" />
        </Datagrid>
      </List>
    </div>
  );
};

export default UserList;
