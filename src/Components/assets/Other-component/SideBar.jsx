import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";

const SideBar = ({ sideBarHandle }) => {
  return (
    <section className="w-full h-screen fixed top-0 left-0 md:hidden flex items-start justify-start bg-black/50 backdrop-blur-md z-40">
      <div className="w-[80%] h-screen bg-white/10 flex flex-col items-center justify-between py-[6vh]">
        <span className="w-full flex flex-col items-center justify-center gap-5 text-[--light]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[--light] w-[80%] py-1.5 flex items-center justify-center bg-black/20"
                : "brightness-90 w-[80%] py-1.5 flex items-center justify-center bg-black/10"
            }
            onClick={sideBarHandle}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[--light] w-[80%] py-1.5 flex items-center justify-center bg-black/20"
                : "brightness-90 w-[80%] py-1.5 flex items-center justify-center bg-black/10"
            }
            onClick={sideBarHandle}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[--light] w-[80%] py-1.5 flex items-center justify-center bg-black/20"
                : "brightness-90 w-[80%] py-1.5 flex items-center justify-center bg-black/10"
            }
            onClick={sideBarHandle}
          >
            Contact
          </NavLink>
        </span>
        <span className="w-full items-center justify-center flex">
          <NavLink
            to="/showroom"
            className="w-[80%] py-1.5 flex items-center justify-center bg-[--third] text-[--light] hover:brightness-75 gap-3"
            onClick={sideBarHandle}
          >
            <GiHomeGarage /> Showroom
          </NavLink>
        </span>
      </div>

      <button
        className="p-2 bg-slate-400/10 flex items-center justify-cemter gap-3 absolute top-6 1sm:right-8 right-4 text-[--light] text-[22px]"
        onClick={sideBarHandle}
      >
        <LiaTimesSolid />
      </button>
    </section>
  );
};
export default SideBar;
