import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BussinessSummary from "./BussinessSummary";
import Parts from "./Parts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BussinessSummary></BussinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
