import "./App.css";
import PublicRoute from "./auth/PublicRoute.jsx";
import PrivateRoute from "./auth/PrivateRoute.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/data/home/HomePage.jsx";
import UserList from "./components/data/user/UserList.jsx";
import CategoryList from "./components/data/category/CategoryList.jsx";
import SubCategoryList from "./components/data/subcategory/SubCategoryList.jsx";
import EventList from "./components/data/event/EventList.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import AddCategory from "./components/data/category/AddCategory.jsx";
import AddSubCategory from "./components/data/subcategory/AddSubCategory.jsx";
import AddEvent from "./components/data/event/AddEvent.jsx";
import Login from "./components/user/Login.jsx";

function App() {
  axios.interceptors.request.use((request) => {
    let token = Cookies.get("bookMySeatAdminToken");
    request.headers.authorization = token;
    return request;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="sub-category-list" element={<SubCategoryList />} />
            <Route path="event-list" element={<EventList />} />
            <Route path="add-category/:action" element={<AddCategory />} />
            <Route
              path="add-sub-category/:action"
              element={<AddSubCategory />}
            />
            <Route path="add-event/:action" element={<AddEvent />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
