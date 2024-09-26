import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";

const Header = ({ sideBarHandle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { twice: true });

  const [currentLink, setCurrentLink] = useState(1);

  const linkHandle = (id) => {
    setCurrentLink(id);
    if (currentLink === id) {
      console.log(currentLink);
    }
  };
  return (
    <section className="w-full md:h-[80px] h-[70px] flex items-start justify-center 2sm:px-[5%] px-[10px] absolute top-0 left-0 z-20 overflow-hidden">
      <span className="clip-path lg:w-[80%] w-[90%] h-[75%] bg-black/30 flex items-center md:justify-evenly justify-between md:gap-7 gap-4 md:px-5 1sm:px-12 sm:px-8 px-6">
        <div className=" xl:w-1/4 w-fit flex items-center justify-around 2md:text-[18px] 1sm:text-[16px] text-[17px] font-semibold text-[--light] xl:gap-5 gap-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[--light] flex " : "brightness-90 hidden md:flex"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[--light] flex" : "brightness-90 hidden md:flex"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[--light] flex" : "brightness-90 hidden md:flex"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="2md:w-1/5 w-fit flex items-center justify-center">
          <NavLink
            to="/"
            className="w-fit h-fit flex flex-col items-center justify-center cursor-pointer gap-1"
          >
            <svg
              fill="var(--light)"
              className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-47.4 -47.4 568.78 568.78"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 473.982 473.982"
              stroke="#000000"
              strokeWidth="0.0047398200000000005"
              transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="m330.563,187.578h-187.145c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h187.146c4.142,0 7.5-3.358 7.5-7.5s-3.359-7.5-7.501-7.5z"></path>{" "}
                  <path d="m65.234,221.578h-27.718c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h27.718c13.697,0 25.247,9.372 28.575,22.04h-54.372c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h62.835c4.142,0 7.5-3.358 7.5-7.5 0.001-24.56-19.979-44.54-44.538-44.54z"></path>{" "}
                  <path d="m408.747,236.578h27.718c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-27.718c-24.559,0-44.539,19.98-44.539,44.54 0,4.142 3.358,7.5 7.5,7.5h62.835c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-54.371c3.328-12.668 14.878-22.04 28.575-22.04z"></path>{" "}
                  <path d="m458.676,188.615c-10.513-10.987-24.789-17.038-40.2-17.038-0.675,0-1.347,0.091-1.997,0.271l-24.103,6.659-35.507-68.214c-6.357-12.212-22.121-21.778-35.887-21.778h-167.984c-13.767,0-29.53,9.566-35.887,21.778l-35.507,68.214-24.103-6.659c-0.65-0.18-1.322-0.271-1.997-0.271-15.411,0-29.688,6.051-40.2,17.038s-15.928,25.517-15.247,40.958l5.443,108.519c0.2,3.991 3.495,7.125 7.491,7.125h2.5v32.75c0,4.142 3.358,7.5 7.5,7.5h78.911c4.142,0 7.5-3.358 7.5-7.5v-10.25c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v2.75h-63.912v-25.25h413v25.25h-63.911v-2.75c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v10.25c0,4.142 3.358,7.5 7.5,7.5h78.911c4.142,0 7.5-3.358 7.5-7.5v-32.75h2.5c3.996,0 7.291-3.133 7.491-7.125l5.444-108.563c0.68-15.397-4.736-29.927-15.249-40.914zm.266,40.207l-5.085,101.394h-433.733l-5.083-101.349c-0.497-11.268 3.445-21.88 11.102-29.881 7.434-7.77 17.482-12.15 28.385-12.396l28.854,7.972c0.018,0.005 0.036,0.01 0.055,0.015l27.984,7.731c3.991,1.103 8.123-1.239 9.226-5.232 1.103-3.992-1.239-8.123-5.232-9.226l-19.026-5.256 34.028-65.373c3.8-7.3 14.352-13.704 22.582-13.704h167.984c8.229,0 18.782,6.404 22.582,13.704l34.028,65.373-19.026,5.256c-3.993,1.103-6.335,5.234-5.232,9.226 1.103,3.993 5.234,6.334 9.226,5.232l56.893-15.718c10.903,0.247 20.951,4.627 28.385,12.396 7.656,8.001 11.598,18.613 11.103,29.836z"></path>{" "}
                  <path d="m418.476,156.578h26.128c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-26.128c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"></path>{" "}
                  <path d="m29.376,156.578h26.128c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-26.128c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5z"></path>{" "}
                  <path d="m320.176,280.171h-166.371c-4.142,0-7.5,3.358-7.5,7.5v20.045c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-12.545h151.371v12.545c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-20.045c-5.68434e-14-4.142-3.358-7.5-7.5-7.5z"></path>{" "}
                  <path d="m278.583,242.578c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-83.186c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h83.186z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <h2 className="slim-font text-[--light] text-[14px] uppercase translate-y-[-13px] font-medium">
              el-clasico
            </h2>
          </NavLink>
        </div>
        <div className="2md:w-1/4 w-fit flex items-center justify-center 2md:text-[14px] text-[13px]">
          <NavLink
            to="/showroom"
            className="md:flex hidden items-center justify-center gap-3 2md:px-5 px-2.5 py-1.5 text-[--light] hover:brightness-90 rounded-sm duration-300 bg-[--third]"
          >
            <GiHomeGarage />
            SHOWROOM
          </NavLink>
          <button
            className="flex md:hidden items-center justify-center p-1 text-[--light] hover:bg-white/5 rounded-sm duration-300 text-[25px]"
            onClick={sideBarHandle}
          >
            <PiSquaresFourFill />
          </button>
        </div>
      </span>
    </section>
  );
};

export default Header;
