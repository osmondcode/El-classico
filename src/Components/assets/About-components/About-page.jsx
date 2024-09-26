import Header from "../Other-component/Header";
import HeroSection from "./About-hero";
import ScrollSec from "./ScrollSection";
import Foundation from "./foundation";
import History from "./History";
import Expertise from "./Expertise";
import SideBar from "../Other-component/SideBar";

const AboutPage = ({ sideBarHandle, sideBar }) => {
  return (
    <section className="w-full min-h-screen relative pb-[100px]">
      {sideBar && <SideBar sideBarHandle={sideBarHandle} />}
      <Header sideBarHandle={sideBarHandle} />
      <HeroSection />
      <ScrollSec />
      <Foundation />
      <History />
      <Expertise />
    </section>
  );
};
export default AboutPage;
