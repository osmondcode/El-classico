import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { CgNotes } from "react-icons/cg";
import imageOne from "../../Images/el-clasico Foundation.jpg";
import imageTwo from "../../Images/foundation.jpg";

const Foundation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { twice: true });
  return (
    <section className="h-fit w-full flex items-center justify-center mt-[100px]">
      <div className="w-[95%] min-h-[60vh] flex flex-col 2md:flex-row items-center justify-around 2md:gap-[40px] gap-[60px] overflow-hidden">
        <span className="lg:w-[530px] 2md:w-[480px] 2sm:w-[450px] sm:w-[400px] w-[90%] lg:h-[360px] 2md:h-[350px] md:h-[340px] 2sm:h-[330px] sm:h-[270px] h-[200px] flex items-center justify-center bg-whie/10 relative">
          <motion.div
            className="w-[90%] lg:h-[320px] 2md:h-[310px] md:h-[300px] 2sm:h-[290px] sm:h-[230px] h-[180px] bg-red-500/10 absolute top-0 right-0 z-10 shadow-md shadow-slate-400/20"
            ref={ref}
            initial={{ x: "60px", y: "-60px" }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imageOne}
              alt="Loading photo..."
              className="w-full h-full object-cover flex items-center justify-center text-[25px] font-semibold bg-black/30 slim-font"
            />
          </motion.div>
          <motion.div
            className="w-[90%] lg:h-[320px] 2md:h-[310px] md:h-[300px] 2sm:h-[290px] sm:h-[230px] h-[180px] bg-green-500/10 absolute bottom-0 left-0 z-20 shadow-md shadow-slate-400/20"
            ref={ref}
            initial={{ x: "-60px", y: "60px" }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imageTwo}
              alt="Loading photo..."
              className="w-full h-full object-cover flex items-center justify-center text-[25px] font-semibold bg-black/40 slim-font"
            />
          </motion.div>
        </span>

        <span className="2md:w-[40%] md:w-[90%] w-[95%] h-fit flex flex-col justify-center 2md:gap-[30px] sm:gap-[20px] gap-[15px]">
          <h1 className="sm:text-[25px] text-[22px] font-medium">
            El-Clasico Foundation
          </h1>
          <p className="sm:text-[14px] text-[13px] leading-6">
            El-clasico Automobile Foundation aims to help solve some of the most
            important challenges facing humanity today. In the spirit of
            El-clasico’s longstanding tradition of innovation, we believe in
            translating commitments into bold and innovative actions alongside
            our partners.
          </p>
          <button className="sm:w-fit w-full h-fit flex items-center justify-center gap-5 py-2 px-4 bg-[--third] font-medium hover:opacity-70 duration-300 text-[14px] text-[--light]">
            <CgNotes />
            EXPLORE
          </button>
        </span>
      </div>
    </section>
  );
};
export default Foundation;
