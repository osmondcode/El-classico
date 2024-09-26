import { useRef } from "react";
import image from "../../Images/Ownership Article Teaser.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { useInView, motion } from "framer-motion";

const SendMessage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { twice: true });
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center my-[12vh] overflow-hidden">
      <div className="w-[95%] h-full flex items-center justify-center bg-black/40 overflow-hidden">
        <img
          src={image}
          alt="Loading photo..."
          className="w-full h-full object-cover flex items-start justify-center text-[--light] text-[30px] font-bold "
        />
        <span className="md:w-[450px] sm:w-[400px] w-[95%] h-[400px] absolute top-auto sm:bottom-auto bottom-[-30px] 2md:right-[19%] right-auto left-auto bg-green-0/30 z-20  flex items-start justify-start my-[5vh]">
          <motion.span
            className="md:w-[180px] 2sm:w-[140px] w-[100px] md:h-[180px] 2sm:h-[140px] h-[100px] backdrop-blur-[4px] absolute 2sm:top-[-30px] top-[-15px] 2sm:left-[-60px] left-[-5px] sm:bg-white/30 bg-white/20"
            ref={ref}
            initial={{ x: "-50px", y: "-50px" }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          ></motion.span>

          <motion.span
            className="md:w-[450px] 2sm:w-[400px] sm:w-[350px] w-full h-fit backdrop-blur-xl absolute sm:top-[5px]  bottom-0 2sm:left-[-10px] sm:left-[25px] left-0 bg-white/10 flex flex-col gap-3 p-4 shadow-md shadow-[#444]"
            ref={ref}
            initial={{ x: 50, y: 50 }}
            animate={inView ? { x: 0, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[--light] text-[22px] font-bold ">
              Send a message
            </h1>
            <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mb-2">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full p-1.5 text-[17px] rounded-[1px] font-medium outline-none border-none bg-[--light] capitalize"
              />
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full p-1.5 text-[17px] rounded-[1px] font-medium outline-none border-none bg-[--light]"
              />
              <textarea
                placeholder="Write a message"
                required
                className="w-full resize-none h-[150px] p-1.5 text-[17px] rounded-[1px] font-medium outline-none border-none bg-[--light]"
              />
              <button className="w-full py-1.5 text-[18px] flex items-center justify-center gap-3 bg-[--third] text-[--light] font-medium">
                Send message <RiSendPlaneFill />
              </button>
            </div>
          </motion.span>
        </span>
      </div>
    </section>
  );
};

export default SendMessage;
