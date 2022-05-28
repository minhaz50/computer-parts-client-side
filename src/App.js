import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/Login/SingUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import ExploreProduct from "./Pages/ExploreProduct/ExploreProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Reviews from "./Pages/Dashboard/AddReviews";
import Blogs from "./Pages/Blogs/Blogs";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import MyProfile from "./Pages/MyProfile/MyProfile";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="bg-neutral">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About></About>}>
          About
        </Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<Reviews></Reviews>}></Route>
          <Route path="users" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        <Route
          path="/allproduct"
          element={<ExploreProduct></ExploreProduct>}
        ></Route>
        <Route path="/profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
