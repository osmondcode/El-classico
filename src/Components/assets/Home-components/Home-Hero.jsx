import { useEffect, useRef, useState } from "react";
import imageOne from "../../Images/24_FRD_MST_61047_v2.jpeg";
import imageTwo from "../../Images/2024 Bentley Batur Convertible.jpeg";
import imageThree from "../../Images/96f7f953411db582355ff2588ea1b6ad.jpg";
import imageFour from "../../Images/0173b8dd686cec7af65e0410d7803e64.jpg";
import Header from "../Other-component/Header";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useInView, motion } from "framer-motion";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { TiImage } from "react-icons/ti";

const Home = ({ sideBarHandle, currentCar, setCurrentCar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { twice: true });

  const Cars = [
    {
      id: 1,
      name: "Bentley Batur Convertible",
      price: "2,300,000",
      image: imageTwo,
      fuelType: "electric",
      miles: "320",
      transmission: "auto",
      year: "2024",
      icon: <TiImage />,
    },
    {
      id: 2,
      name: "Ford Mustang 2024",
      price: "39,000",
      image: imageOne,
      fuelType: "petrol",
      miles: "240",
      transmission: "manual",
      year: "2024",
      icon: <TiImage />,
    },
    {
      id: 3,
      name: "BMW 3 Series",
      price: "46,300",
      image: imageThree,
      fuelType: "petrol",
      miles: "260",
      transmission: "Auto",
      year: "2023",
      icon: <TiImage />,
    },
    {
      id: 4,
      name: "Lamborghini Aventador",
      price: "550,542",
      image: imageFour,
      fuelType: "petrol",
      miles: "350",
      transmission: "manual",
      year: "2022",
      icon: <TiImage />,
    },
  ];

  const nextHandle = () => {
    if (currentCar < Cars.length) {
      setCurrentCar(currentCar + 1);
      if (currentCar === 3) {
        setCurrentCar(0);
      }
    }
  };

  const prevHandle = () => {
    if (currentCar > 0) {
      setTimeout(() => {
        setCurrentCar(currentCar - 1);
      }, 100);
    }
  };

  const [icon, setIcon] = useState(<TiImage />);
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative ">
      <Header sideBarHandle={sideBarHandle} />
      <img
        src={Cars[currentCar].image}
        alt="Loading photo..."
        className="w-full h-full object-cover flex items-center justify-center bg-black/50 text-[30px] text-[--light]"
      />

      <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-70px)] w-full  absolute z-30 bottom-0 left-auto right-auto flex items-center justify-center ">
        <span className="w-full h-full px-[2%] flex items-end md:justify-between justify-center py-3 text-[--light] absolute right-0 bottom-0 gap-1.5 2md:pb-[10vh] md:pb-[6vh] sm:pb-[25px] pb-[20px]">
          <div className="2md:w-[400px] w-[350px] h-fit 2md:p-5  p-3 bg-black/20 hidden md:flex flex-col items-start justify-between">
            <span className="mb-5 flex flex-col gap-1">
              <h2 className="2md:text-[25px] text-[20px] font-bold leading-4">
                ${Cars[currentCar].price}
              </h2>
              <h1 className="2md:text-[27px] text-[25px] font-bold">
                {Cars[currentCar].name}
              </h1>
            </span>

            <div className="w-full flex items-center justify-between">
              <span className="w-fit flex items-center justify-center gap-2">
                <div
                  className={
                    currentCar === 0
                      ? "2md:w-[35px] w-[30px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "2md:w-[20px] w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                ></div>
                <div
                  className={
                    currentCar === 1
                      ? "2md:w-[35px] w-[30px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "2md:w-[20px] w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                ></div>
                <div
                  className={
                    currentCar === 2
                      ? "2md:w-[35px] w-[30px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "2md:w-[20px] w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                ></div>
                <div
                  className={
                    currentCar === 3
                      ? "2md:w-[35px] w-[30px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "2md:w-[20px] w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                ></div>
              </span>

              <span className="flex items-center gap-3 2md:text-[16px] text-[14px]">
                <button
                  className="w-fit h-fit p-1.5 bg-white/20 hover:brightness-90"
                  onClick={prevHandle}
                >
                  <LiaAngleLeftSolid />
                </button>
                <button
                  className="w-fit h-fit p-1.5 bg-white/20 hover:brightness-90"
                  onClick={nextHandle}
                >
                  <LiaAngleRightSolid />
                </button>
              </span>
            </div>
          </div>

          {/* MINI CAR DETAILS */}
          <div className="sm:w-[330px] W-[290px] 2md:h-[40vh] h-fit py-1 p-2 bg-black/20 md:hidden flex flex-col items-end justify-between absolute z-[30] top-7 right-[20px]">
            <span className="flex flex-col gap-0 text-right">
              <h2
                className="sm:text-[18px] text-[16px] font-semibold"
                ref={ref}
                initial={{ y: "20px", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                ${Cars[currentCar].price}
              </h2>
              <motion.h1
                className="sm:text-[22px] text-[20px] font-bold"
                ref={ref}
                initial={{ y: "20px", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                {Cars[currentCar].name}
              </motion.h1>
            </span>
          </div>

          <div className="w-[200px] h-fit  bg-black/20 md:flex hidden flex-col items-start justify-between py-5 px-3 gap-5 rounded">
            <span className="flex flex-col">
              <p className="2md:text-[22px] text-[19px] 2md:mb-[10px] mb-[8px]">
                <BsFuelPump />
              </p>
              <p className="2md:text-[11px] text-[10px] font-medium">
                Fuel type
              </p>
              <h2 className="leading-3 font-semibold 2md:text-[16px] text-[14px]">
                {Cars[currentCar].fuelType}
              </h2>
            </span>

            <span className="flex flex-col">
              <p className="2md:text-[22px] text-[19px] 2md:mb-[10px] mb-[8px]">
                <SlSpeedometer />
              </p>
              <p className="2md:text-[11px] text-[10px] font-medium">
                miles/hr
              </p>
              <h2 className="leading-3 font-semibold 2md:text-[16px] text-[14px]">
                {Cars[currentCar].miles} miles
              </h2>
            </span>

            <span className="flex flex-col">
              <p className="2md:text-[22px] text-[19px] 2md:mb-[10px] mb-[8px]">
                <GiGearStickPattern />
              </p>
              <p className="2md:text-[11px] text-[10px] font-medium">
                Transmision
              </p>
              <h2 className="leading-3 font-semibold 2md:text-[16px] text-[14px]">
                {Cars[currentCar].transmission}
              </h2>
            </span>

            <span className="flex flex-col">
              <p className="2md:text-[22px] text-[19px] 2md:mb-[10px] mb-[8px]">
                <FaRegCalendarAlt />
              </p>
              <p className="2md:text-[11px] text-[10px] font-medium">Year</p>
              <h2 className="leading-3 font-semibold 2md:text-[16px] text-[14px]">
                {Cars[currentCar].year}
              </h2>
            </span>

            <NavLink
              to="/showroom"
              className="w-full py-1.5 2md:text-[15px] text-[13.5px] font-medium hover:brightness-90 rounded-md bg-[--third] flex items-center justify-center gap-3"
            >
              MORE INFO
              <BsInfoCircleFill />
            </NavLink>
          </div>

          {/* MINI CAR INFOR */}
          <div className="sm:w-[90%] w-full h-fit  bg-black/20 md:hidden flex flex-col items-center justify-center py-4 px-2 gap-5 rounded brightness-90">
            <span className="w-full flex items-center gap-3 justify-between">
              <button
                className="w-fit h-fit p-1.5 bg-white/10 hover:brightness-90"
                onClick={prevHandle}
              >
                <FaArrowLeftLong />
              </button>
              <span className="w-fit flex items-center justify-center gap-2">
                <motion.div
                  className={
                    currentCar === 0
                      ? "w-[25px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                  ref={ref}
                  initial={{ y: "20px", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                ></motion.div>
                <motion.div
                  className={
                    currentCar === 1
                      ? "w-[25px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                  ref={ref}
                  initial={{ y: "20px", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                ></motion.div>
                <motion.div
                  className={
                    currentCar === 2
                      ? "w-[25px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                  ref={ref}
                  initial={{ y: "20px", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                ></motion.div>
                <motion.div
                  className={
                    currentCar === 3
                      ? "w-[25px] h-[5px] bg-[--light] rounded-[20px] duration-300"
                      : "w-[15px] h-[5px] bg-slate-300/60 rounded-[20px] duration-300"
                  }
                  ref={ref}
                  initial={{ y: "20px", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                ></motion.div>
              </span>
              <button
                className="w-fit h-fit p-1.5 bg-white/10 hover:brightness-90"
                onClick={nextHandle}
              >
                <FaArrowRightLong />
              </button>
            </span>

            <div className="w-full flex gap-5 items-center justify-evenly">
              <span className="flex flex-col items-center justify-center">
                <p className="2md:text-[22px] md:text-[19px] text-[17px] 2md:mb-[10px] mb-[8px]">
                  <BsFuelPump />
                </p>
                <p className="2md:text-[11px] text-[10px] font-medium">
                  Fuel type
                </p>
                <h2 className="leading-3 font-semibold 2md:text-[16px] md:text-[14px] text-[13.5px]">
                  {Cars[currentCar].fuelType}
                </h2>
              </span>

              <span className="flex flex-col items-center justify-center">
                <p className="2md:text-[22px] md:text-[19px] text-[17px] 2md:mb-[10px] mb-[8px]">
                  <SlSpeedometer />
                </p>
                <p className="2md:text-[11px] text-[10px] font-medium">
                  miles/hr
                </p>
                <h2 className="leading-3 font-semibold 2md:text-[16px] md:text-[14px] text-[13.5px]">
                  {Cars[currentCar].miles} miles
                </h2>
              </span>

              <span className="flex flex-col items-center justify-center">
                <p className="2md:text-[22px] md:text-[19px] text-[17px] 2md:mb-[10px] mb-[8px]">
                  <GiGearStickPattern />
                </p>
                <p className="2md:text-[11px] text-[10px] font-medium">
                  Transmision
                </p>
                <h2 className="leading-3 font-semibold 2md:text-[16px] md:text-[14px] text-[13.5px]">
                  {Cars[currentCar].transmission}
                </h2>
              </span>

              <span className="flex flex-col items-center justify-center">
                <p className="2md:text-[22px] md:text-[19px] text-[17px] 2md:mb-[10px] mb-[8px]">
                  <FaRegCalendarAlt />
                </p>
                <p className="2md:text-[11px] text-[10px] font-medium">Year</p>
                <h2 className="leading-3 font-semibold 2md:text-[16px] md:text-[14px] text-[13.5px]">
                  {Cars[currentCar].year}
                </h2>
              </span>
            </div>

            <NavLink
              to="/showroom"
              className="w-full py-1.5 2md:text-[15px] text-[13.5px] font-medium hover:brightness-90 rounded-md bg-[--third] flex items-center justify-center gap-4"
            >
              MORE INFO
              <BsInfoCircleFill />
            </NavLink>
          </div>
        </span>
      </div>
    </section>
  );
};
export default Home;
