import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BussinessSummary from "./BussinessSummary";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BussinessSummary></BussinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
