import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center ">
        <h1 className="text-5xl text-white">Dashboard</h1>
        <Outlet></Outlet>
        <label
          for="my-drawer-3"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/uesrs">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
