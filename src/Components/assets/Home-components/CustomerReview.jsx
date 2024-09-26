import { IoStar } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import imageOne from "../../Images/King Faisal.jpeg";
import imageTwo from "../../Images/Cassie Blake TSC Aesthetic.jpeg";
import imageThree from "../../Images/_jpZ96cR.jpeg";
import imageFour from "../../Images/Chao XingMu.jpeg";
import imageFive from "../../Images/ليلى عبدالله💗💕💓.jpeg";
import imageSix from "../../Images/Download premium png of PNG African american man thinking sweatshirt portrait sweater_ by Wit about man thinking, man shock png, thinking man png, frustrated man, and maroon background 13557182.jpeg";

const CustomerReview = () => {
  const Review = [
    {
      id: 1,
      name: "Abdul-Aziz Bin Sa'ud",
      message:
        "I recently purchased a luxury SUV from this company, and I must say, it exceeded all my expectations.",
      photo: imageOne,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfSharp className="text-[--dark]" />
        </span>
      ),
    },

    {
      id: 2,
      name: "Samantha Robertson",
      message:
        "From start to finish, my experience with this luxury automobile company was exceptional.",
      photo: imageTwo,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </span>
      ),
    },
    {
      id: 3,
      name: "Alexsei Dmitri",
      message:
        "I recently upgraded to one of the luxury electric models, and it’s a game-changer.",
      photo: imageThree,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfSharp className="text-[--dark]" />
          <IoStarOutline className="text-[--dark]" />
        </span>
      ),
    },
    {
      id: 4,
      name: "Xiu Fang",
      message:
        "After months of research, I decided to buy my dream sedan from this company, and I couldn’t be more pleased.",
      photo: imageFour,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </span>
      ),
    },
    {
      id: 5,
      name: "Benissa Abdellah",
      message:
        "I’m absolutely in love with my new convertible! It’s not just a car; it’s a statement.",
      photo: imageFive,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfSharp className="text-[--dark]" />
          <IoStarOutline className="text-[--dark]" />
        </span>
      ),
    },
    {
      id: 6,
      name: "Jack Smith",
      message:
        "I’ve always dreamed of owning a luxury vehicle, and thanks to this company, that dream has come true. ",
      photo: imageSix,
      star: (
        <span className="w-fit h-fit flex items-center justify-center gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfSharp className="text-[--dark]" />
        </span>
      ),
    },
  ];
  return (
    <section className="w-full h-fit py-10 flex flex-col items-center justify-center gap-4">
      <h1 className="text-[30px] font-bold mx-5 text-[--dark] underline decoration-[--third] underline-offset-8 decoration-[1.5px]">
        Reviws
      </h1>
      <div className="w-fit h-fit lg:grid flex lg:flex-nowrap flex-wrap gap-3 grid-cols-3 items-center justify-center p-2">
        {Review.map((customer, i) => (
          <span
            key={i}
            className="xl:w-[350px] sm:w-[320px] w-full xl:h-[180px] sm:h-[160px] h-[180px] m-1 bg-slate-300/50 cursor-pointer flex items-center justify-between gap-2 hover:scale-[1.01] duration-300 shadow-sm shadow-[#777] hover:shadow-md"
          >
            <div className="w-2/3 h-full flex flex-col xl:gap-2 gap-1 xl:mt-2 mt-0 xl:p-2 p-1.5">
              <h1 className="sm:text-[18px] text-[16px] font-bold">
                {customer.name}
              </h1>
              <p className="xl:text-[14px] text-[13px]">{customer.message}</p>
              <span className="mt-1">{customer.star}</span>
            </div>

            <div className="w-1/3 h-full flex items-start justify-center ">
              <span className="h-[145px] w-[145px] border-[2px] border-dashed border-[--third] rounded-b-full rounded-bl-full flex items-center justify-center p-1">
                <span className="h-full w-full bg-black/50 rounded-b-full overflow-hidden flex items-center justify-center">
                  <img
                    src={customer.photo}
                    alt="Loading photo..."
                    className="w-full h-full object-cover flex items-center justify-center text-[16px] text-[--light] text-center font-semibold"
                  />
                </span>
              </span>
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};
export default CustomerReview;
