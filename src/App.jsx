import "./App.css";
import React, { useEffect, useState } from "react";
import PreLoader from "./Components/assets/Other-component/PreLoader";
import Homepage from "./Components/assets/Home-components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/assets/About-components/About-page";
import ContactUs from "./Components/assets/Contact-components/Contact-page";
import ShowRoom from "./Components/assets/Showroom-component/Showroom";
import ShowRoomForm from "./Components/assets/Showroom-component/Form";
import Appreciation from "./Components/assets/Showroom-component/Appreciation";
import Footer from "./Components/assets/Other-component/Footer";

const App = () => {
  const [currentCar, setCurrentCar] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const modeHandle = () => {
    setDarkMode(!darkMode);
  };

  const [sideBar, setSideBar] = useState(false);

  const sideBarHandle = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <section className="w-full h-screen text-center flex px-3 bg-[--dark] text-[--light] s:hidden items-center justify-center fixed top-0 left-0 z-50 slim-font leading-7">
        SORRY THIS DEVICE'S SCREEN RESOLUTION IS TOO SMALL TO LOAD THIS
        WEBPAGE!! TRY A BIGGER DEVICE
      </section>

      <section
        className={
          darkMode
            ? "App w-full min-h-screen bg-[--dark] text-[--light]"
            : "App w-full min-h-screen bg-[--light] text-[--dark]"
        }
      >
        {isLoading && <PreLoader darkMode={darkMode} />}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  setCurrentCar={setCurrentCar}
                  currentCar={currentCar}
                  sideBar={sideBar}
                  sideBarHandle={sideBarHandle}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutUs sideBarHandle={sideBarHandle} sideBar={sideBar} />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactUs sideBar={sideBar} sideBarHandle={sideBarHandle} />
              }
            />
            <Route
              path="/showroom"
              element={
                <ShowRoom
                  sideBar={sideBar}
                  sideBarHandle={sideBarHandle}
                  currentCar={currentCar}
                  setCurrentCar={setCurrentCar}
                />
              }
            />
            <Route
              path="/showroomForm"
              element={
                <ShowRoomForm
                  sideBar={sideBar}
                  sideBarHandle={sideBarHandle}
                  currentCar={currentCar}
                  setCurrentCar={setCurrentCar}
                />
              }
            />
            <Route
              path="/appreciation"
              element={
                <Appreciation
                  sideBar={sideBar}
                  sideBarHandle={sideBarHandle}
                  currentCar={currentCar}
                  setCurrentCar={setCurrentCar}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </section>
    </>
  );
};

export default App;
