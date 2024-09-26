import image from "../../Images/ab.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { twice: true });
  return (
    <section
      id="about"
      className="w-full lg:min-h-screen h-fit flex flex-col 2md:flex-row items-center justify-start gap-y-5"
    >
      <div className="2md:w-[50%] 2sm:w-[90%] w-full lg:min-h-[70vh] h-fit 2sm:px-[3%] px-[15px] flex flex-col items-start justify-center gap-3 pt-7 2md:pt-0  mb-8 lg:mb-0">
        <motion.h2
          className="text-[--third] lg:text-[25px] text-[22px] font-semibold underline decoration-[--dark] underline-offset-8 decoration-[1px]"
          ref={ref}
          initial={{ opacity: 0, y: "80px" }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="lg:text-[16px] sm:text-[15px] text-[14px] text-justify 2sm:text-left "
          ref={ref}
          initial={{ opacity: 0, y: "80px" }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          At <strong>EL-CLASICO Automobile</strong>, we specialize in offering a
          handpicked selection of the world’s finest luxury vehicles, designed
          to meet the desires of the most discerning automotive enthusiasts.
          With a focus on elegance, performance, and exclusivity, our collection
          features iconic brands renowned for their craftsmanship and
          engineering excellence. Whether you are in search of a sleek sports
          car, a sophisticated sedan, or a timeless classic, our curated
          inventory promises to deliver both prestige and unparalleled driving
          experiences.
        </motion.p>
        <motion.button
          className="w-fit h-fit py-1 px-5 bg-[--dark] text-[17px] text-[--light] mt-2 flex items-center justify-center gap-2"
          ref={ref}
          initial={{ y: "80px", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          More Info
          <IoIosInformationCircleOutline />
        </motion.button>
      </div>

      <div className="2md:w-[50%] 2md:h-screen 2sm:h-[500px] sm:h-[380px] h-[300px] md:w-[60%] 2sm:w-[90%] sm:w-[420px] sl:w-[300px] w-full">
        <img
          src={image}
          alt="ABOUT US IMAGE"
          className="w-full h-full flex items-center justify-center bg-black/50 text-[30px] text-[--light] font-bold"
        />
      </div>
    </section>
  );
};
export default About;
