import imageOne from "../../Images/models.jpeg";
import imageTwo from "../../Images/lifestyle.jpeg";
import imageThree from "../../Images/pre-owend.jpeg";
import imageFour from "../../Images/accesories.jpeg";
import imageFive from "../../Images/collections.jpeg";
import { useRef, useState } from "react";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { useInView, motion } from "framer-motion";

const ScrollX = () => {
  const items = [
    {
      id: 1,
      heading: "Models",
      body: "Explore the El-Classico automobile store",
      message:
        "Ford has been building cars by hand for more than a century.Today, they include the stunning Benaga Extended Wheelbase – an SUV that offers an unrivalled passenger experience – and the Benaga, which combines go-anywhere capability with handcrafted luxury. The Flying Spur is among the most sought-after executive sedans in the world.",
      image: imageOne,
      button: "Explore",
      icon: <CgNotes />,
    },
    {
      id: 2,
      heading: "El-Clasico Lifestyle",
      body: "Join us un sculpting a life where each moment is a mastapiece",
      message:
        "In every facet of Luxury Lifestyle, we invite you to embark on a journey where luxury is not just a possession but a way of life. It's an adventure in refinement, an exploration of the extraordinary, and a celebration of your individuality. Join us in sculpting a life where each moment is a masterpiece, and the pursuit of perfection knows no bounds.",
      image: imageTwo,
      button: "Explore",
      icon: <CgNotes />,
    },
    {
      id: 3,
      heading: "Pre-Owned Cars",
      body: "Discover our range of exceptional Pre-Owned cars",
      message:
        "Every car to bear the Rolls Royce name has been made to the same exacting standards, whether you choose a new or pre-owned model.",
      image: imageThree,
      button: "shop now",
      icon: <BsCart2 />,
    },
    {
      id: 4,
      heading: "Accessories",
      body: "Make your car even more personal by choosing from a wide range of car accesories",
      message:
        "Every car is unrivalled when it comes to craftsmanship, performance and design. But every car owner is different. That’s why we offer an extensive range of car accessories, designed to enhance the way your car looks, sounds and feels, elevating your driving experience. In short, there is no better way to complete your vision and make your car unique.",
      image: imageFour,
      button: "Explore",
      icon: <CgNotes />,
    },
    {
      id: 5,
      heading: "El-clasico Collection",
      body: "Luxury products inspired by our extraordinary car brands",
      message:
        "Visit the Bentley Collection Shop. Keep up to date with Bentley Collection news, with product information & more.",
      image: imageFive,
      button: "Shop Now",
      icon: <BsCart2 />,
    },
  ];

  const [full, setFull] = useState(null);
  const infoHandle = (index) => {
    if (full === index) {
      setFull(null);
    } else {
      setFull(index);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { twice: true });
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-start py-[100px] gap-[50px] ">
      <div className="w-[95%] flex flex-wrap items-center justify-center min-h-[70vh] gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="sm:w-[320px] w-[90%] sm:h-[400px] h-[385px] bg-black/20 relative cursor-pointer overflow-hidden flex"
          >
            <img
              src={item.image}
              alt="Loading photo..."
              className="w-full h-full object-cover hover:scale-[1.02] duration-300 flex items-center justify-center text-[20px] bg-black/50 text-[--light] font-semibold"
              onClick={() => infoHandle(index)}
            />
            <span
              className={
                full === index
                  ? "absolute bottom-0 left-0 flex flex-col gap-0 items-start justify-start w-full h-full sm:py-4 py-2 px-3 text-[--light] bg-black/50 backdrop-blur"
                  : "absolute bottom-0 left-0 flex flex-col gap-0 items-start justify-start w-full h-fit pb-3 pt-1 px-3 text-[--light] bg-black/40"
              }
            >
              <h2 className="text-[18px] font-semibold">{item.heading}</h2>
              <p className={full === index ? "hidden" : "text-[15px] flex"}>
                {item.body}
              </p>
              <p
                className={
                  full === index ? "text-[16px] text-justify flex" : "hidden"
                }
              >
                {item.message}
              </p>

              <span className="flex items-center justify-start gap-3 mt-3">
                <button
                  className={
                    full === index
                      ? "w-fit h-fit px-3 py-1.5 border-[0.5px] border-[--third] flex bg-[--third] items-center justify-center gap-1 font-medium uppercase text-[14px] hover:opacity-70 opacity-90 duration-100"
                      : "hidden"
                  }
                >
                  {item.icon}
                  {item.button}
                </button>

                <button
                  onClick={() => infoHandle(index)}
                  className={
                    full === index
                      ? "w-fit h-fit px-3 py-1.5 border-[0.5px] border-[--light] flex bg-white/05 items-center justify-center gap-1 uppercase text-[14px] hover:opacity-70 opacity-90 duration-100"
                      : "hidden"
                  }
                >
                  <TfiAngleDoubleDown />
                  Close
                </button>
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ScrollX;
