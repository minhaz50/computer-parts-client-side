import React from "react";
import profile from "../MyProfile/profile.jpg";
import Footer from "../Shared/Footer";

const MyProfile = () => {
  return (
    <div>
      <h1 className="text-white text-3xl text-center uppercase">My Profile</h1>
      <div className="mt-24 ">
        <div class="avatar ">
          <div class="w-24  ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 items-center">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-5xl ml-10 ">Md Minhaz Uddin</h1>
          <br />
          <h2 className="text-white text-3xl ml-10 ">
            National Institute Of Technology,Tiruchirappalli (CSE)
          </h2>
          <h2 className="text-white text-3xl ml-10 ">
            md.minhazuddin2597@gmail.com
          </h2>
          <h2 className="text-white ml-10 mt-4 text-xl">
            List of Technologies:
            <li>
              HTML,CSS,JavsScript,bootstrap,tailwind,React.Js,Node.js,mongodb,express.Js
            </li>
            <h1>Also Know</h1>
            <li>C,C++,Python,Data Structure,Algorithms,MySQL</li>
          </h2>
          <br />
          <br />
          <h2 className="text-white ml-10">
            https://minhaz50.github.io/project-2/
          </h2>
          <h2 className="text-white ml-10">
            https://head-phones-worlds.netlify.app/home
          </h2>
          <h2 className="text-white ml-10">
            https://fitness-care-a83c9.web.app/login
          </h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
