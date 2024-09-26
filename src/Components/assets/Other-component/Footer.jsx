import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { TfiPinterestAlt } from "react-icons/tfi";
import { BiLogoYoutube } from "react-icons/bi";
import { RiTiktokFill } from "react-icons/ri";
import { IoLogoWechat } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";
import { VscLinkExternal } from "react-icons/vsc";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import { useState } from "react";
const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    // Toggle the clicked dropdown, and close others by setting the state
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close the currently open dropdown
    } else {
      setOpenDropdown(dropdownId); // Open the clicked dropdown
    }
  };
  return (
    <section className="w-full h-fit py-[8vh] flex flex-col items-center justify-center text-[--dark] gap-6">
      <div className="w-[95%] py-[20px]  flex flex-col items-center justify-center gap-5 2md:border-b-[2px] border-b-[1.5px] border-[--dark] mb-3">
        <span className="lg:w-[70%] w-[90%] 2md:flex hidden items-center justify-between  gap-9 text-[14px] font-semibold ">
          <p>NEWSLETTER</p>
          <p>CONFIGURATOR</p>
          <span className="w-fit h-fit flex flex-col items-center justify-center cursor-pointer">
            <svg
              fill="var(--dark)"
              height="55px"
              width="55px"
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
            <h2 className="slim-font text-[--third] text-[15px] uppercase translate-y-[-13px] font-medium">
              el-clasico
            </h2>
          </span>
          <p>LOCATE DEALER</p>
          <p>DOWNLOAD BROCHURE</p>
        </span>

        <span className="lg:w-[70%] w-[90%] flex flex-col 2md:hidden items-center justify-center text-[14px] font-semibold ">
          <span className="w-fit h-fit flex flex-col items-center justify-center cursor-pointer text-">
            <svg
              fill="var(--dark)"
              height="55px"
              width="55px"
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
            <h2 className="slim-font text-[--third] text-[15px] uppercase translate-y-[-13px] font-medium">
              el-clasico
            </h2>
          </span>
          <span className="flex items-center justify-between mb-2 gap-[60px] sm:text-[16px] text-[13px]">
            <p>NEWSLETTER</p>
            <p>CONFIGURATOR</p>
          </span>
          <span className="flex items-center mb-2 gap-[60px] sm:text-[16px] text-[13px]">
            <p>LOCATE DEALER</p>
            <p>DOWNLOAD BROCHURE</p>
          </span>
        </span>

        <span className="2md:w-[40%] w-[80%] flex items-center justify-between 2md:text-[18px] text-[20px] flex-wrap">
          <button>
            <CiInstagram />
          </button>
          <button>
            <BsTwitterX />
          </button>
          <button>
            <ImFacebook2 />
          </button>
          <button>
            <TfiPinterestAlt />
          </button>
          <button>
            <BiLogoYoutube />
          </button>
          <button>
            <RiTiktokFill />
          </button>
          <button>
            <IoLogoWechat />
          </button>
          <button>
            <ImLinkedin />
          </button>
        </span>
      </div>
      <div className="w-[95%] py-[20px] flex flex-col items-center justify-center gap-8 border-b-[1.5px] border-[--dark] mb-3">
        {/* MINI DROP DOWN */}
        <span className="w-full flex md:hidden items-start justify-between gap-5 flex-wrap">
          <div className="w-full border-b-[0.1px] border-b-slate-300">
            <div
              className={
                openDropdown === 1
                  ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 py-2 px-3"
                  : "font-medium w-full flex items-center justify-between cursor-pointer py-2 px-3"
              }
              onClick={() => toggleDropdown(1)}
            >
              Brands
              {openDropdown === 1 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {openDropdown === 1 && (
              <div className="flex flex-col gap-4 text-[11px] font-medium py-2 px-3 mb-3">
                <p>Bentley</p>
                <p>Rolls Royce</p>
                <p>Audi</p>
                <p>Lamborghini</p>
                <p>Tesla</p>
                <p>McLaren</p>
                <p>Ferrari</p>
                <p>Maserati</p>
              </div>
            )}
          </div>
          <div className="w-full border-b-[0.1px] border-b-slate-300">
            <div
              className={
                openDropdown === 2
                  ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 py-2 px-3"
                  : "font-medium w-full flex items-center justify-between cursor-pointer py-2 px-3"
              }
              onClick={() => toggleDropdown(2)}
            >
              Your Car
              {openDropdown === 2 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {openDropdown === 2 && (
              <div className="flex flex-col gap-4 text-[11px] font-medium py-2 px-3 mb-3">
                <p>Service and maintenance</p>
                <p>Ownership support</p>
                <p>Technology</p>
                <p>Financial Service</p>
                <p>Accessories</p>
              </div>
            )}
          </div>
          <div className="w-full border-b-[0.1px] border-b-slate-300">
            <div
              className={
                openDropdown === 3
                  ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 py-2 px-3"
                  : "font-medium w-full flex items-center justify-between cursor-pointer py-2 px-3"
              }
              onClick={() => toggleDropdown(3)}
            >
              Lifestyle
              {openDropdown === 3 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {openDropdown === 3 && (
              <div className="flex flex-col gap-4 text-[11px] font-medium py-2 px-3">
                <p>Experiences</p>
                <p>Architecture and Design</p>
                <p>Automotive</p>
                <p>Audio</p>
              </div>
            )}
          </div>
          <div className="w-full border-b-[0.1px] border-b-slate-300">
            <div
              className={
                openDropdown === 4
                  ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 py-2 px-3"
                  : "font-medium w-full flex items-center justify-between cursor-pointer py-2 px-3"
              }
              onClick={() => toggleDropdown(4)}
            >
              About
              {openDropdown === 4 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {openDropdown === 4 && (
              <div className="flex flex-col gap-4 text-[11px] font-medium py-2 px-3">
                <p className="flex items-center gap-3">
                  <VscLinkExternal /> News
                </p>
                <p>El-Clasico Environmental Foundation</p>
                <p>Beyond100</p>
                <p>History and Heritage</p>
                <p>Poeple and Expertise</p>
                <p>Factory Tours</p>
              </div>
            )}
          </div>
          <div className="w-full border-b-[0.1px] border-b-slate-300">
            <div
              className={
                openDropdown === 5
                  ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 py-2 px-3"
                  : "font-medium w-full flex items-center justify-between cursor-pointer py-2 px-3"
              }
              onClick={() => toggleDropdown(5)}
            >
              Corporate
              {openDropdown === 5 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
            </div>
            {openDropdown === 5 && (
              <div className="flex flex-col gap-4 text-[11px] font-medium py-2 px-3">
                <p>Brand Manifesto</p>
                <p>Social Sustainability</p>
                <p>Environmental Sustainability</p>
                <p> Compliance and Risk</p>
                <p className="flex items-center gap-3">
                  <VscLinkExternal /> Community Investment
                </p>
                <p className="flex items-center gap-3">
                  <VscLinkExternal /> Advancing Life Chances Small Grants <br />
                  Programme
                </p>
              </div>
            )}
          </div>
        </span>
        {/* MINI DROP DOWN */}

        <span className="w-full md:flex hidden items-start justify-between gap-5 flex-wrap">
          <div className="flex flex-col gap-9 ">
            <h2 className="font-medium">Brands</h2>
            <div className="flex flex-col gap-4 text-[11px] font-medium">
              <p>Bentley</p>
              <p>Rolls Royce</p>
              <p>Audi</p>
              <p>Lamborghini</p>
              <p>Tesla</p>
              <p>McLaren</p>
              <p>Ferrari</p>
              <p>Maserati</p>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <h2 className="font-medium">Your Car</h2>
            <div className="flex flex-col gap-4 text-[11px] font-medium">
              <p>Service and maintenance</p>
              <p>Ownership support</p>
              <p>Technology</p>
              <p>Financial Service</p>
              <p>Accessories</p>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <h2 className="font-medium">Lifestyle</h2>
            <div className="flex flex-col gap-4 text-[11px] font-medium">
              <p>Experiences</p>
              <p>Architecture and Design</p>
              <p>Automotive</p>
              <p>Audio</p>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <h2 className="font-medium">About</h2>
            <div className="flex flex-col gap-4 text-[11px] font-medium">
              <p className="flex items-center gap-3">
                <VscLinkExternal /> News
              </p>
              <p>El-Clasico Environmental Foundation</p>
              <p>Beyond100</p>
              <p>History and Heritage</p>
              <p>Poeple and Expertise</p>
              <p>Factory Tours</p>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <h2 className="font-medium">Corporate</h2>
            <div className="flex flex-col gap-4 text-[11px] font-medium">
              <p>Brand Manifesto</p>
              <p>Social Sustainability</p>
              <p>Environmental Sustainability</p>
              <p> Compliance and Risk</p>
              <p className="flex items-center gap-3">
                <VscLinkExternal /> Community Investment
              </p>
              <p className="flex items-center gap-3">
                <VscLinkExternal /> Advancing Life Chances Small Grants <br />
                Programme
              </p>
            </div>
          </div>
        </span>
        <span className="w-full flex items-center lg:justify-between gap-3 sm:text-[13.5px]  text-[12px] font-medium uppercase mb-[20px] flex-wrap justify-center">
          <button className="flex items-center gap-3">
            <VscLinkExternal /> 中文网站
          </button>
          <button className="flex items-center gap-3">
            <VscLinkExternal /> MODERN SLAVERY
          </button>
          <button className="flex items-center gap-3">RECALLS SEARCH</button>
          <button className="flex items-center gap-3">
            <VscLinkExternal /> EL-CLASICO COLLECTION
          </button>
          <button className="flex items-center gap-3">
            <VscLinkExternal /> Code of Conduct
          </button>
          <button className="flex items-center gap-3">
            <VscLinkExternal /> Tax Strategy
          </button>
          <button className="flex items-center gap-3">
            <VscLinkExternal /> Whistleblower System
          </button>
        </span>
      </div>
      <div className="w-[95%] py-[5px] flex flex-col items-center justify-center gap-4">
        <p className="text-[11px] font-medium">
          &copy; Copyright El-clasico Automobile 2024
        </p>

        <span className="w-fit flex items-center 2md:justify-between justify-center gap-8 flex-wrap text-[13px] font-medium mb-4">
          <p>SITEMAP</p>
          <p>CONTACT US </p>
          <p>TERMS AND CONDITIONS </p>
          <p>PRIVACY POLICY </p>
          <p>COOKIE POLICY</p>
          <p>COOKIE SETTINGS</p>
        </span>

        <p className="text-[10px] font-semibold text-center">
          Registered Office: Pyms Lane, Crewe, Cheshire, CW1 3PL, England.
          Registered in England: Number 992897
        </p>
      </div>
    </section>
  );
};
export default Footer;
