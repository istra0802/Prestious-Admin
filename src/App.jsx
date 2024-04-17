
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./components/authProvider";
// import UserList from "./components/contests/contestdata";
import { Admin,  Resource , EditGuesser} from "react-admin";
// import PostIcon from "@mui/material"
import { dataProvider } from "./dataProvider";
import { ContestList, contestCreate, contestEdit } from "./components/contests/contestList";
import {CategoryList} from "./components/category/CategoryList"
// import { PostList, PostEdit , PostCreate } from "./components/post";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider = {dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="contests"
      list={ContestList}
      options={{ label: "Contests" }}
      edit={EditGuesser}
      icon={UserIcon}
    />
    <Resource name="contests/all/category" options={{ label: "Category" }} list={CategoryList} edit={contestEdit}  create={contestCreate} />
  </Admin>
);
























//When displaying the posts list, the app displays the id of the post author. This doesn’t mean much - we should use the user name instead. For that purpose, set the recordRepresentation prop of the “users” Resource:

//for data exchanges between computers, react-admin needs an adapter to talk to your API. This adapter is called a Data Provider.
// The list={ListGuesser} tells react-admin to use the <ListGuesser> component to display the list of users.

// recordRepresentation of the “users” Resource, the user name is displayed for the post author.

// When a user edits a record and hits the “Save” button, the UI shows a confirmation and displays the updated data before sending the update query to server. The main benefit is that UI changes are immediate - no need to wait for the server response. It’s a great comfort for users.

// Even though updates appear immediately due to Optimistic Rendering, React-admin only sends them to the server after a short delay (about 5 seconds). During this delay, the user can undo the action, and react-admin will never send the update.

// https://atme-quiz.onrender.com/api/contests/all/category"
