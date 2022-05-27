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
import Reviews from "./Pages/Dashboard/Reviews";

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
        </Route>
        <Route
          path="/allproduct"
          element={<ExploreProduct></ExploreProduct>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
