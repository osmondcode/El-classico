import ShowHeader from "./ShowRoom-Header";
import background from "../../Images/2023 Ford Mustang Car aesthetic _ Cool cars _ car wallpapers.jpeg";
import { LuMail } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import SideBar from "../Other-component/SideBar";

const Appreciation = ({ sideBarHandle, sideBar }) => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-start relative">
      <ShowHeader sideBarHandle={sideBarHandle} />
      {sideBar && <SideBar sideBarHandle={sideBarHandle} />}
      <div className="w-[95%] h-[85vh] flex flex-col items-center justify-center 1sm:mt-[80px] mt-[60px] gap-2 relative rounded-lg overflow-hidden">
        <div className="w-[220px] h-[220px] heptagon bg-[--third] opacity-80 flex items-center justify-center image-loading1"></div>
        <img
          src={background}
          alt="Loading photo..."
          className="w-full h-full object-cover flex items-center justify-center brightness-50 absolute z-20 top-0 left-0"
        />
        <div className="lg:w-[530px] 2sm:w-[500px] w-[90%] px-[20px] h-[330px] flex flex-col items-center justify-center md:gap-5 gap-3 backdrop-blur-lg bg-white/15 rounded-lg absolute top-auto bottom-auto left-auto right-auto z-20">
          <span className="flex items-center justify-center lg:text-[50px] text-[40px] text-[--third] mb-3">
            <LuMail />
          </span>
          <h1 className="text-[--light] lg:text-[45px] md:text-[40px] text-[30px] leading-5 mb-1 font-medium">
            Thank You!
          </h1>
          <p className="lg:text-[17px] md:text-[16px] text-[15px] text-[--light] text-center font-light">
            Thank you for your inquiry! We appreciate your interest and will be
            in touch within the next 48 hours.
          </p>
          <NavLink
            to="/"
            className="w-fit px-3 py-1.5 flex items-center justify-center gap-3 bg-[--third] text-[--light] font-medium mt-4 lg:text-[16px] text-[15px]"
          >
            Go To Homepage <LiaHomeSolid />
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default Appreciation;
