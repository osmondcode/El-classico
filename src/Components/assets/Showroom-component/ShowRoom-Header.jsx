import { GoArrowLeft } from "react-icons/go";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowRoom_Header = ({ sideBarHandle }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <section className="w-full md:h-[60px] h-[50px] flex items-center justify-center absolute top-0 left-0 z-20 overflow-hidden bg-transparent">
      <div className="w-[80%] h-full flex items-center justify-between  2sm:px-[8%] px-[10%] absolute top-0 left-auto right-auto z-20 overflow-hidden bg-black/30 clip-path">
        <button
          onClick={handleGoBack}
          className="px-1.5 py-1 text-[20px] bg-[--third] rounded text-[--light]"
        >
          <GoArrowLeft />
        </button>

        <span className="w-fit hidden md:flex items-center justify-around 2md:text-[18px] 1sm:text-[16px] text-[17px] font-semibold text-[--light] xl:gap-5 gap-4 ">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </span>

        <button
          className="flex md:hidden items-center justify-center p-1 text-[--light] hover:bg-white/5 rounded-sm duration-300 text-[27px]"
          onClick={sideBarHandle}
        >
          <PiSquaresFourFill />
        </button>
      </div>
    </section>
  );
};
export default ShowRoom_Header;
