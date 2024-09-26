import { useRef } from "react";
import image from "../../Images/People- hub.jpg";
import { CgNotes } from "react-icons/cg";
import { useInView, motion } from "framer-motion";

const Expertise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { twice: true });
  return (
    <section className="relative w-full h-[85vh] bg-yelow-400 flex items-center justify-center mt-[15vh] overflow-hidden text-[--light]">
      <div className="w-[95%] h-full flex items-center justify-center bg-black/40 relative">
        <img
          src={image}
          alt="Loading photo..."
          className="w-full h-full object-cover flex items-start justify-center text-[25px] font-semibold bg-black/20 slim-font"
        />
        <span className="md:w-[450px] sm:w-[440px] w-[95%] min-h-[350px] absolute top-auto bottom-auto lg:left-[15%] 2md:left-[10%] right-auto left-auto z-20 flex items-center justify-center my-[5vh]">
          <motion.span
            className="lg:w-[180px] 2sm:w-[140px] w-[100px] lg:h-[180px] 2sm:h-[140px] h-[100px] backdrop-blur-[12px] absolute 2sm:top-[-25px] top-[-15px] 2sm:right-[-40px] right-[-5px] bg-black/20"
            ref={ref}
            initial={{ x: "80px", y: "-80px" }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          ></motion.span>

          <motion.span
            className="md:w-[450px] 2sm:w-[440px] sm:w-[400px] w-full h-fit backdrop-blur-[18px] absolute top-[5px] bottom-0 2sm:left-[-10px] sm:left-[25px] left-auto right-auto flex flex-col 2sm:gap-4 gap-3 2md:p-8 1sm:p-6 p-4 shadow-md shadow-slate-400/20 bg-black/70"
            ref={ref}
            initial={{ x: "-80px", y: "80px" }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="sm:text-[25px] text-[21px] font-medium">
              People and expertise
            </h1>
            <p className="sm:text-[14.5px] text-[13px] 2sm:leading-6 leading-7">
              From U.I. Osmond, who founded El-clasico Automobile in 1919, to
              the current team of over 4,000 dedicated employees, the company’s
              extraordinary cars have always been designed and built by
              exceptional people using only the finest of materials. They have
              always been driven by exceptional people, too.
            </p>
            <button className="2sm:w-fit w-full h-fit flex items-center justify-center gap-5 py-2 px-4 bg-[--third] font-medium hover:opacity-70 duration-300 text-[14px] mt-2 2sm:mt-0">
              <CgNotes />
              EXPLORE
            </button>
          </motion.span>
        </span>
      </div>
    </section>
  );
};

export default Expertise;
