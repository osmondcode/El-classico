import { motion } from "framer-motion";

const Scroll = ({ threeDHandle }) => {
  return (
    <motion.section
      className="w-full h-screen left-0 top-0 fixed z-40 bg-white/10 text-[--dark] backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 8, duration: 0.5 }}
    >
      <div className="2md:w-[400px] 2sm:w-[350px] sm:w-[320px] w-[290px] 2md:h-[210px] h-[190px] rounded shadow shadow-[#111] relative flex items-center justify-center bg-[--light]">
        <span className="2md:h-[100px] h-[130px] 2md:flex block items-start justify-start px-2 gap-1">
          <h3 className="font-semibold">Note:</h3>
          <span className="font-light leading-6 text-[15px] 2md:text-[16px] ">
            Explore the cars in stunning 3D! Drag to rotate and view them from
            every angle, ensuring you don't miss a single detail.
          </span>
        </span>
        <button
          className="2md:w-[80px] 2sm:w-[70px] w-[60px] 2md:h-[40px] 2sm:h-[35px] h-[30px] 2md:text-[16px] 2sm:text-[14px] text-[13px] flex items-center justify-center absolute 2md:right-[30px] right-[20px] 2md:bottom-[25px] bottom-[15px] rounded-md bg-[--third] font-semibold text-[--light]"
          onClick={threeDHandle}
        >
          OK
        </button>
      </div>
    </motion.section>
  );
};
export default Scroll;
