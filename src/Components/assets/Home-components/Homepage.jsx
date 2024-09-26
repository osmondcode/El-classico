import { useState } from "react";
import HomeHero from "./Home-Hero";
import About from "./About";
import ScrollX from "./Home-ScrollX";
import BrandLogo from "./BrandLogo";
import WeDo from "./WhatWeDo";
import CustomerReview from "./CustomerReview";
import SendMessage from "./SendMessage";
import SideBar from "../Other-component/SideBar";

const Homepage = ({ setCurrentCar, currentCar, sideBar, sideBarHandle }) => {
  const [threeD, setThreeD] = useState(true);
  const threeDHandle = () => {
    setThreeD(false);
  };
  return (
    <section className="w-full min-h-screen relative">
      {sideBar && <SideBar sideBarHandle={sideBarHandle} />}
      <HomeHero
        sideBarHandle={sideBarHandle}
        currentCar={currentCar}
        setCurrentCar={setCurrentCar}
      />
      <About />
      <ScrollX />
      <BrandLogo />
      <WeDo />
      <CustomerReview />
      <SendMessage />
    </section>
  );
};

export default Homepage;
