import ShowHeader from "./ShowRoom-Header";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

import BaturOne from "../../Images/2024 Bentley Batur Convertible.jpeg";
import BaturTwo from "../../Images/batur.jpeg";
import BaturThr from "../../Images/bartur2.jpeg";
import BaturFou from "../../Images/batur3.jpeg";

import BmwOne from "../../Images/BMW2.jpeg";
import BmwTwo from "../../Images/BMW.jpeg";
import BmwThr from "../../Images/BMW3.jpeg";
import BmwFou from "../../Images/BMW4.jpeg";

import MustangOne from "../../Images/mustang3.jpeg";
import MustangTwo from "../../Images/mustang2.jpeg";
import MustangThr from "../../Images/mustang.jpeg";
import MustangFou from "../../Images/mustang4.jpeg";

import AventadorOne from "../../Images/aventador3.jpeg";
import AventadorTwo from "../../Images/aventador2.jpeg";
import AventadorThr from "../../Images/aventador.jpeg";
import AventadorFou from "../../Images/aventador4.jpeg";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../Other-component/SideBar";

const ShowRoom = ({ currentCar, sideBar, sideBarHandle }) => {
  const Car = [
    {
      id: 1,
      name: "Bentley Batur Convertible",
      price: "2,300,000",
      fuel: "Electric",
      mile: "320",
      transmission: "Auto",
      year: "2024",
      images: [BaturOne, BaturTwo, BaturThr, BaturFou],
      textOne:
        "The Bentley Batur Convertible, priced at $2,300,000, is a stunning blend of luxury and performance. With its handcrafted design and powerful W12 engine, it exemplifies automotive excellence. Limited production ensures exclusivity, making it a symbol of opulence.",
      textTwo:
        "Inside the Bentley Batur Convertible, premium materials like fine leather, wood veneers, and metal accents create an ultra-luxurious cabin. Its advanced technology and bespoke features enhance the driving experience, offering unmatched comfort and customization. This masterpiece is a rare statement of style and power.",
    },
    {
      id: 2,
      name: "Ford Mustang 2024",
      price: "39,000",
      fuel: "Petrol",
      mile: "420",
      transmission: "Manual",
      year: "2024",
      images: [MustangOne, MustangTwo, MustangThr, MustangFou],
      textOne:
        "The 2024 Ford Mustang, priced at $39,000, offers a thrilling combination of performance and modern technology. Equipped with a turbocharged engine and sleek design, it delivers impressive power and handling. Its advanced features make it ideal for driving enthusiasts seeking excitement.",
      textTwo:
        "Inside the 2024 Mustang, you'll find a driver-focused cockpit with a digital instrument cluster and intuitive infotainment system. Enhanced safety features and customizable driving modes add to the experience, blending style and performance. This new model continues the legacy of Mustang’s iconic muscle car heritage.",
    },
    {
      id: 3,
      name: "BMW 3 Series",
      price: "46,300",
      fuel: "Petrol",
      mile: "260",
      transmission: "Auto",
      year: "2023",
      images: [BmwOne, BmwTwo, BmwThr, BmwFou],
      textOne:
        "The $46,300 BMW 3 Series offers a blend of luxury and performance, featuring a powerful engine and sleek design. Its dynamic handling, advanced technology, and spacious interior make it an ideal choice for drivers seeking both comfort and a thrilling driving experience.",
      textTwo:
        "Equipped with cutting-edge safety features, the BMW 3 Series ensures a secure ride for all passengers. The model boasts a high-quality interior with premium materials, intuitive infotainment systems, and customizable options, catering to drivers who value precision, innovation, and unparalleled craftsmanship in their vehicle.",
    },
    {
      id: 4,
      name: "Lamborghini Aventador",
      price: "550,542",
      fuel: "Petrol",
      mile: "320",
      transmission: "Auto",
      year: "2024",
      images: [AventadorOne, AventadorTwo, AventadorThr, AventadorFou],
      textOne:
        "The Lamborghini Aventador, priced at $550,542, offers unparalleled performance with its V12 engine and sleek aerodynamic design. This luxury sports car accelerates from 0 to 60 mph in just 2.9 seconds, delivering a thrilling driving experience for enthusiasts.",
      textTwo:
        "With a futuristic design, carbon fiber frame, and cutting-edge technology, the Aventador stands as a symbol of power and prestige. Its aggressive styling, coupled with advanced driving dynamics, makes it an iconic representation of Lamborghini’s commitment to both performance and luxury in the supercar market.",
    },
  ];

  const [mainImage, setMainImage] = useState(Car[currentCar].images[0]);
  const imageHandle = (large) => {
    setMainImage(large);
  };
  return (
    <section className="w-full min-h-screen flex flex-col items-center 2md:justify-start justify-evenly 2md:gap-5 gap-4 relative">
      <ShowHeader sideBarHandle={sideBarHandle} />
      {sideBar && <SideBar sideBarHandle={sideBarHandle} />}

      <div className="w-full flex flex-col items-center justify-start px-[20px] 1sm:mt-[80px] mt-[60px] md:gap-5 1sm:gap-4 gap-3">
        <span className="md:w-[550px] 1sm:w-[70%] sm:w-[85%] w-full sm:h-[40vh] h-[30vh] bg-black/5 flex items-center justify-center 1sm:shadow-md shadow shadow-slate-400/40 overflow-hidden">
          <img
            src={mainImage}
            alt="Loading photo..."
            className="w-full h-full object-cover flex items-center justify-center slim-font text-[25px]"
          />
        </span>
        <span className="md:w-[550px] 1sm:w-[70%] sm:w-[85%] w-full min-h-[10vh] flex flex-col md:gap-5 sm:gap-4 gap-3 items-center justify-between">
          <div className="w-full h-fit flex items-center sm:justify-evenly justify-between">
            <span className="sm:min-w-[70px] min-w-[60px] 2sm:h-[60px] sm:h-[55px] h-[50px] flex flex-col items-center justify-start gap-1 p-2 border-[0.5px] border-slate-400/40">
              <p className="1sm:text-[20px] text-[17px]">
                <BsFuelPump />
              </p>
              <p className="slim-font 1sm:text-[15px] text-[13px]">
                {Car[currentCar].fuel}
              </p>
            </span>
            <span className="sm:min-w-[70px] min-w-[60px] 2sm:h-[60px] sm:h-[55px] h-[50px] flex flex-col items-center justify-start gap-1 p-2 border-[0.5px] border-slate-400/40">
              <p className="1sm:text-[20px] text-[17px]">
                <SlSpeedometer />
              </p>
              <p className="slim-font 1sm:text-[15px] text-[13px]">
                {Car[currentCar].mile} km/hr
              </p>
            </span>
            <span className="sm:min-w-[70px] min-w-[60px] 2sm:h-[60px] sm:h-[55px] h-[50px] flex flex-col items-center justify-start gap-1 p-2 border-[0.5px] border-slate-400/40">
              <p className="1sm:text-[20px] text-[17px]">
                <GiGearStickPattern />
              </p>
              <p className="slim-font 1sm:text-[15px] text-[13px]">
                {Car[currentCar].transmission}
              </p>
            </span>
            <span className="sm:min-w-[70px] min-w-[60px] 2sm:h-[60px] sm:h-[55px] h-[50px] flex flex-col items-center justify-start gap-1 p-2 border-[0.5px] border-slate-400/40">
              <p className="1sm:text-[20px] text-[17px]">
                <FaRegCalendarAlt />
              </p>
              <p className="slim-font 1sm:text-[15px] text-[13px]">
                {Car[currentCar].year}
              </p>
            </span>
          </div>

          <NavLink
            to="/showroomForm"
            className="1sm:w-[200px] w-[180px] 1sm:h-[40px] h-[35px] bg-[--third] flex items-center justify-center gap-3 text-[--light] cursor-pointer hover:brightness-90 hover:shadow-slate-400/30 shadow shadow-transparent"
          >
            <p>${Car[currentCar].price}</p>
            <p>
              <PiShoppingCartSimpleFill />
            </p>
          </NavLink>
        </span>
      </div>

      <div className="md:w-[600px] 1sm:w-[80%] sm:w-[85%] w-[95%] sm:h-[18vh] h-fit flex items-center sm:justify-between justify-center sm:flex-nowrap flex-wrap gap-x-5 gap-y-3">
        {Car[currentCar].images.map((image, index) => (
          <span
            className="sm:w-[22%] w-[120px] sm:h-[90%] h-[60px] bg-black/10  flex items-center justify-center text-center text-[12px] border-[2px] border-black/50"
            key={index}
          >
            <img
              src={image}
              alt="Loading photo..."
              className="w-full h-full object-cover flex items-center justify-center cursor-pointer text-[15px] text-center slim-font"
              onClick={() => imageHandle(image)}
            />
          </span>
        ))}
      </div>

      <div className="md:w-[90%] w-[95%] flex flex-col gap-3 mt-[50px]">
        <h1 className="2md:text-[30px] 1sm:text-[25px] sm:text-[20px] text-[18px] 2md:font-bold sm:font-semibold font-bold">
          About {Car[currentCar].name}
        </h1>
        <p className="2md:text-[18px] 1sm:text-[16px] text-[14px] leading-8 text-justify">
          {Car[currentCar].textOne}
        </p>
        <p className="2md:text-[18px] 1sm:text-[16px] text-[14px] leading-8 text-justify">
          {Car[currentCar].textTwo}
        </p>
      </div>
    </section>
  );
};
export default ShowRoom;
