import { BsShop } from "react-icons/bs";
import imageOne from "../../Images/what we do 1.jpg";
import imageTwo from "../../Images/what we do 2.jpeg";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
const WeDo = () => {
  const [position, setPosition] = useState(true);

  const handlePosition = () => {
    setPosition(!position);
  };

  const ref = useRef(null);
  const inView = useInView(ref, { twice: true });
  return (
    <section className="w-full px-[5%] min-h-[85vh] mt-[10vh] flex md:flex-row flex-col items-center justify-between xl:justify-center gap-8 xl:gap-20 py-10 md:py-0">
      <div className="lg:w-[400px] md:w-[350px] 2sm:w-[400px] sm:w-[320px] w-[290px] lg:h-[430px] md:h-[380px] 2sm:h-[430px] sm:h-[380px] h-[350px] flex items-center justify-center relative">
        <motion.span
          className={
            position
              ? "lg:w-[340px] md:w-[290px] 2sm:w-[340px] w-[270px] lg:h-[400px] md:h-[350px] 2sm:h-[400px] h-[310px] bg-black/30 absolute z-20 left-0 bottom-0 cursor-pointer overflow-hidden shadow-md shadow-[#666]"
              : "lg:w-[340px] md:w-[290px] 2sm:w-[340px] w-[270px] lg:h-[400px] md:h-[350px] 2sm:h-[400px] h-[310px] bg-black/30 absolute z-5 left-0 bottom-0 cursor-pointer overflow-hidden shadow-md shadow-[#666]"
          }
          ref={ref}
          initial={{ y: "100px" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageOne}
            alt="Loading photo..."
            className="w-full h-full object-cover hover:scale-[1.03] duration-300 flex items-center justify-center text-[20px] bg-black/50 text-[--light] font-semibold"
            onClick={handlePosition}
          />
        </motion.span>
        <motion.span
          className={
            position
              ? "lg:w-[340px] md:w-[290px] 2sm:w-[340px] w-[270px] lg:h-[400px] md:h-[350px] 2sm:h-[400px] h-[310px] bg-blue-500/30 absolute z-10 right-0 top-0 cursor-pointer overflow-hidden shadow-md shadow-[#666]"
              : "lg:w-[340px] md:w-[290px] 2sm:w-[340px] w-[270px] lg:h-[400px] md:h-[350px] 2sm:h-[400px] h-[310px] bg-blue-500/30 absolute z-20 right-0 top-0 cursor-pointer overflow-hidden shadow-md shadow-[#666]"
          }
          ref={ref}
          initial={{ y: "-100px" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageTwo}
            alt="Loading photo..."
            className="w-full h-full object-cover hover:scale-[1.03] duration-300 flex items-center justify-center text-[20px] bg-black/50 text-[--light] font-semibold"
            onClick={handlePosition}
          />
        </motion.span>
      </div>

      <div className="md:w-[55%] w-[95%] md:h-[400px] h-fit  flex flex-col items-start justify-center gap-3">
        <motion.h1
          className="capitalize text-[22px] lg:text-[24px] font-medium underline decoration-[--third] underline-offset-8 decoration-[1.5px]"
          ref={ref}
          initial={{ y: "-80px" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <p className="lg:text-[16px] text-[15px] text-justify">
          At <strong>El-Clasico</strong>, we specialize in providing top-quality
          automobile services, ensuring your vehicle performs at its best with
          expert maintenance and repair solutions. In addition, we offer a
          luxury car rental service, featuring an exclusive selection of
          high-end, fancy cars for any occasion. Whether you need dependable
          service or want to make a statement on the road, we’ve got you
          covered. Drive with confidence and style!
        </p>
        <motion.button
          className="sm:w-fit w-full h-fit lg:px-5 px-3 py-1.5 sm:py-2 2sm:py-1.5 border-[1.5px] border-transparent  hover:opacity-80 bg-[--third] font-semibold lg:text-[16.5px] text-[14px] duration-300 flex items-center justify-center gap-2 text-[--light] mt-2 shadow-sm shadow-[#777]"
          ref={ref}
          initial={{ y: 50 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Showroom
          <BsShop />
        </motion.button>
      </div>
    </section>
  );
};
export default WeDo;
