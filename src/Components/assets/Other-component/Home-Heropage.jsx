import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, Suspense } from "react";
import React, { useRef, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Heropage = ({ setCurrentCar, currentCar, models }) => {
  const handleNext = () => {
    setCurrentCar(currentCar + 1);
    if (currentCar == 5) {
      setCurrentCar(0);
    }
  };

  const handlePrev = () => {
    setCurrentCar(currentCar - 1);
    if (currentCar == 0) {
      setCurrentCar(5);
    }
  };

  return (
    <section className="w-full h-[calc(100vh-80px)] flex items-center justify-between px-[10px] 2md:px-[5%] mb-4">
      <div className="w-full md:h-[63vh] sm:h-[53vh] h-[45vh] flex flex-col relative items-center overflow-hidden justify-between 2sm:pt-[10px] sm:pt-0 pt-1">
        <div className="flex flex-col items-center justify-center md:mt-10 mt-5 gap-1 duration-1000">
          <h2 className="2md:text-[70px] 2sm:text-[55px] sm:text-[35px] text-[30px] text-slate-400 font-extrabold uppercase leading-3 ">
            {models[currentCar].brand}
          </h2>
          <h2 className="2md:text-[150px] 2sm:text-[130px] sm:text-[90px] text-[55px] text-slate-400 font-extrabold uppercase 2md:leading-[170px] 2sm:leading-[150px] sm:leading-[90px] leading-[70px]">
            {models[currentCar].name}
          </h2>
        </div>

        <motion.div
          className="2sm:w-[90%] w-full 2md:h-[53vh] 2sm:h-[53vh] sm:h-[43vh] h-[33vh] absolute sm:bottom-[15px] 2sm:bottom-0 bottom-auto sm:top-auto top-[30px]  left-auto right-auto z-10 flex items-baseline justify-end overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ delay: 7, duration: 1.2 }}
        >
          <Canvas
            className="w-full sm:h-fit h-[30vh] cursor-pointer"
            camera={{
              position: [3, 3, 13], // Set the camera position (x, y, z)
              fov: 70, // Set the field of view
            }}
          >
            <directionalLight position={[0, 0, 10]} intensity={1} />
            <directionalLight position={[0, 10, 0]} intensity={1} />
            <directionalLight position={[10, 0, 0]} intensity={1} />
            <directionalLight position={[0, 0, -10]} intensity={1} />
            <directionalLight position={[0, -10, 0]} intensity={1} />
            <directionalLight position={[-10, 0, 0]} intensity={1} />
            <hemisphereLight
              intensity={2}
              skyColor="white"
              groundColor="white"
            />
            <Suspense position={[0, 0, 0]}>{models[currentCar].model}</Suspense>
          </Canvas>
        </motion.div>

        <div className="flex items-center justify-center gap-5 absolute md:top-[30px] 2sm:top-[20] top-auto 2sm:bottom-auto bottom-[50px] md:right-[15px] 2sm:right-[10px] right-auto left-[10px] 2sm:left-auto circle-text 2md:w-[60px] 2sm:w-[50px] sm:w-[35px] w-[30px] 2md:h-[60px] 2sm:h-[50px] sm:h-[35px] h-[30px] bg-[--third] text-[--light]">
          <h1 className="slim-font 2md:text-[35px] 2sm:text-[34px] sm:text-[31px] text-[29px]">
            0{models[currentCar].id}
          </h1>
        </div>

        <div className="w-full md:h-[50px] h-[40px] absolute z-30 left-0 bottom-0 flex items-center justify-between px-[2.5%]">
          <button
            className="w-fit h-fit text-[13px] py-0.5 px-2 border-[--dark] border-[1px] flex md:hidden items-center justify-center gap-2 text-[--dark] bg-[--light] font-normal hover:font-medium hover:bg-[--third] hover:text-[--light] duration-300 hover:border-[--third]"
            onClick={handlePrev}
          >
            <LiaAngleLeftSolid /> Prev
          </button>

          <span className="hidden md:flex items-center gap-3">
            <Link
              to="/carInfo"
              className="sm:w-fit w-[70%] h-fit 2md:text-[16px] text-[15px] py-1 px-2.5 hover:border-[--dark] border-[--third] border-[1px] flex items-center justify-center gap-2 text-[--light] bg-[--third] font-medium hover:bg-[--light] hover:text-[--dark] duration-300"
            >
              More info <IoIosInformationCircleOutline />
            </Link>
          </span>

          <span className="w-fit h-fit flex items-center justify-center gap-[6px] 2sm:absolute relative z-30 top-auto 2sm:left-[47%] left-auto ">
            {models.map((dot, i) => (
              <div
                key={i}
                className={`${
                  i === currentCar
                    ? "2sm:w-[30px] w-[21px] 2sm:h-[10px] h-[7px] rounded-full border-[1px] border-[--third] bg-[--third] duration-500"
                    : "2sm:w-[10px] w-[7px] 2sm:h-[10px] h-[7px] rounded-full border-[1px] border-[--dark] bg-[--light] duration-500"
                }`}
              ></div>
            ))}
          </span>

          <h2 className="text-[20px] hidden md:flex slim-font font-normal">
            ${models[currentCar].price}
          </h2>

          <button
            className="w-fit h-fit text-[13px] py-0.5 px-2 border-[--third] hover:border-[--dark] border-[1px] flex md:hidden items-center justify-center gap-2 text-[--light] bg-[--third] font-normal hover:font-medium hover:bg-[--light] hover:text-[--dark] duration-300 "
            onClick={handleNext}
          >
            Next <LiaAngleRightSolid />
          </button>
        </div>
      </div>

      <div className="w-full md:h-[22vh] sm:h-[33vh] h-[38vh] flex flex-col justify-end items-center pb-2">
        <div className="md:hidden flex items-center justify-center sm:mb-3 mb-2">
          <h2 className="text-[20px] slim-font font-normal">
            ${models[currentCar].price}
          </h2>
        </div>
        <div className="w-full h-fit flex items-center justify-center  gap-4 sm:mb-6 mb-5">
          <button
            className="w-fit h-fit text-[15px] py-0.5 px-2 border-[1px] border-[--dark] md:flex hidden items-center justify-center gap-2 text-[--dark] bg-[--light] font-normal hover:font-medium hover:bg-[--third] hover:text-[--light] duration-300 hover:border-[--third]"
            onClick={handlePrev}
          >
            <LiaAngleLeftSolid /> Prev
          </button>

          <span className="w-full sm:w-fit flex items-center justify-center sm:gap-4 gap-2 sm:mx-4 mx-0">
            <div className="w-fit 2md:h-[50px] sm:h-[45px] h-[40px] block items-start justify-start text-center mx-2">
              <h3 className="2md:text-[15px] sm:text-[14px] text-[12px] font-medium text-[--third]">
                Top Speed
              </h3>
              <h1 className="slim-font 2md:text-[20px] text-[18px] ">
                {models[currentCar].topSpeed}km/h
              </h1>
            </div>

            <hr className="2sm:w-[1.5px] w-[1px] bg-[--dark] 2md:h-[55px] 2sm:h-[45px] h-[40px] rotate-[15deg]" />

            <div className="w-fit 2md:h-[50px] h-[45px] block items-start justify-start text-center mx-2">
              <h3 className="22md:text-[15px] sm:text-[14px] text-[12px] font-medium text-[--third]">
                0-60 km/h
              </h3>
              <h1 className="slim-font 2md:text-[20px] text-[18px]">
                {models[currentCar].maxTime}s
              </h1>
            </div>

            <hr className="2sm:w-[1.5px] w-[1px] bg-[--dark] 2md:h-[55px] 2sm:h-[45px] h-[40px] rotate-[15deg]" />

            <div className="w-fit 2md:h-[50px] h-[45px] block items-start justify-start text-center mx-2">
              <h3 className="2md:text-[15px] sm:text-[14px] text-[12px] font-medium text-[--third]">
                Horsepower
              </h3>
              <h1 className="slim-font 2md:text-[20px] text-[18px]">
                {models[currentCar].hp}hp
              </h1>
            </div>
          </span>

          <button
            className="w-fit h-fit text-[15px] py-0.5 px-2 border-[1px] border-[--third] hover:border-[--dark] md:flex hidden items-center justify-center gap-2 text-[--light] bg-[--third] font-normal hover:font-medium hover:bg-[--light] hover:text-[--dark] duration-300  "
            onClick={handleNext}
          >
            Next <LiaAngleRightSolid />
          </button>
        </div>
        <div className="w-full h-fit flex flex-col sm:flex-row md:hidden items-center justify-center gap-3 ">
          {/* <button className="sm:w-fit w-[70%] h-fit 2md:text-[16px] text-[15px] py-1 px-2.5 hover:border-[--dark] border-[--third] border-[1px] flex items-center justify-center gap-2 text-[--light] bg-[--third] font-medium hover:bg-[--light] hover:text-[--dark] duration-300">
            Customize <GiSettingsKnobs />
          </button> */}
          <Link
            to="/carInfo"
            className="sm:w-fit w-[70%] h-fit 2md:text-[16px] text-[15px] py-1 px-2.5 hover:border-[--dark] border-[--third] border-[1px] flex items-center justify-center gap-2 text-[--light] bg-[--third] font-medium hover:bg-[--light] hover:text-[--dark] duration-300"
          >
            More info <IoIosInformationCircleOutline />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Heropage;
