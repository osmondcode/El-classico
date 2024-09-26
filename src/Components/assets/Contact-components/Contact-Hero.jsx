import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mediaOne from "../../Images/Standalone AMG Dealerships To Launch Around The World _ Carscoops.jpeg";
import mediaTwo from "../../Images/About hub media 2.jpg";
import mediaThree from "../../Images/Lamborghini wallpaper Forza Horizon 5.jpeg";
const ContactHero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { twice: true });
  return (
    <section className="pt-[90px] 2md:pt-[100px] w-full min-h-[80vh] relative flex flex-col items-center justify-start md:gap-[45px] gap-[35px] overflow-x-hidden">
      <h1 className="md:text-[35px] text-[30px] font-bold slim-font">
        CONTACT US
      </h1>

      <span className="xl:w-[1150px] lg:w-[1000px] 2md:w-[850px] md:w-[750px] 2sm:w-[600px] 1sm:w-[500px] sm:w-[400px] w-[95%] 2md:h-[480px] md:h-[430px] 2sm:h-[380px] 1sm:h-[340px] h-[310px] flex items-center justify-center relative gap-4 ">
        <motion.div
          className="2md:w-[400px] md:w-[350px] 2sm:w-[300px] 1sm:w-[270px] w-[250px] 2md:h-[480px] md:h-[430px] 2sm:h-[380px] 1sm:h-[340px] h-[310px] bg-green-400/5 absolute top-0 xl:right-[18%] 2md:right-[13%] md:right-[9%] 2sm:right-[6%] right-0 bottom-ato z-20 shadow-md shadow-slate-400/30"
          ref={ref}
          initial={{ x: "100px" }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src={mediaThree}
            alt="Loading photo..."
            className="w-full h-full object-cover flex items-center justify-center text-[25px] font-semibold bg-black/30 slim-font"
          />
        </motion.div>
        <motion.div
          className="md:w-[380px] 2sm:w-[300px] sm:w-[330px] w-[90%] 2md:h-[380px] md:h-[330px] 2sm:h-[270px] h-[230px] bg-blue-400/5 absolute 2sm:left-[27%] left-0 bottom-0 z-10"
          ref={ref}
          initial={{ y: "-100px" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src={mediaTwo}
            alt="Loading photo..."
            className="w-full h-full object-cover flex items-center justify-center text-[25px] font-semibold bg-black/40 slim-font"
          />
        </motion.div>
        <motion.div
          className="2md:w-[430px] md:w-[380px] 2sm:w-[340px] 1sm:w-[310px] w-[280px] 2md:h-[330px] md:h-[300px] 2sm:h-[250px] 1sm:h-[220px] sm:h-[190px] h-[220px] bg-red-400/5 absolute top-5 xl:left-[22%] lg:left-[19%] md:left-[10%] 2sm:left-[6.5%] sm:left-[1%] left-0 z-30 flex items-center justify-center shadow-md shadow-slate-400/10"
          ref={ref}
          initial={{ x: "-100px" }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src={mediaOne}
            alt="Loading photo..."
            className="w-full h-full object-cover flex items-center justify-center text-[25px] font-semibold bg-black/40 slim-font"
          />
        </motion.div>
      </span>
    </section>
  );
};
export default ContactHero;
