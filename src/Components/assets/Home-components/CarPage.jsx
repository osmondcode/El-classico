import { TfiAngleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState } from "react";

const CarPage = ({ models, currentCar }) => {
  const [color, setColor] = useState("#000000"); // Default color is black

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the state with the selected color
  };
  return (
    <section className="w-full h-screen relative">
      <Link
        to="/"
        className="absolute left-[30px] top-[40px] z-10 flex items-center justify-center gap-1 text-[18px]"
      >
        <TfiAngleLeft />
        Back
      </Link>

      <div className="absolute right-[50px] top-[10px] z-10">
        <h1 className="text-[100px] ">{models[currentCar].name}</h1>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-between">
        <div className="w-[80%] h-[71vh] flex items-center justify-evenly ">
          <Canvas
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
            <Suspense>{models[currentCar].model}</Suspense>
            <OrbitControls
              // maxPolarAngle={Math.PI / 2} // Limit vertical rotation
              maxPolarAngle={Math.PI / 2} // Prevent rotating below the model
              minDistance={1} // Minimum zoom distance
              maxDistance={15} // Maximum zoom distance
            />
          </Canvas>
        </div>
        <div className="w-[60%] h-[28vh] flex flex-col items-center justify-start text-center gap-2">
          <p>{models[currentCar].moreInfo}</p>
          <button className="w-fit h-fit 2md:text-[16px] text-[15px] py-1 px-2.5 flex items-center justify-center border-[1.5px] border-[--third] gap-2 text-[--light] bg-[--third] font-medium hover:bg-[--light] hover:text-[--third] duration-300">
            Pre-Order <GiSettingsKnobs />
          </button>
        </div>
      </div>
    </section>
  );
};
export default CarPage;
