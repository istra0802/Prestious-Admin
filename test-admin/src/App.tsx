import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import UserList from "./screens/contact";
{console.log("dataProvider",dataProvider)}
export const App = () => (
  <Admin dataProvider={dataProvider}>
    
    <Resource
      name="user"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      
/>
    <Resource
      name="newsletter"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
