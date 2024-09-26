import { IoMdSend } from "react-icons/io";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MainForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <section className="2md:w-[65%] md:w-[80%] w-full mt-[100px] flex flex-col gap-6">
      <div className="w-full px-1 py-3 flex flex-col gap-6 border-t-[2.5px] border-t-gray-500/30">
        <h1 className="font-medium text-[17px]">Personal details</h1>

        <span className="w-full flex flex-col gap-8">
          <div className="w-full">
            <select
              name="Title"
              id=""
              className="w-full p-3 bg-slate-400/10 font-medium text-[17px]"
            >
              <option value="Mr">Mr.</option>
              <option value="Miss">Miss.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Dr">Dr.</option>
              <option value="Prof">Prof.</option>
              <option value="Engr">Engr</option>
            </select>
          </div>

          <div className="w-full flex flex-col 1sm:flex-row items-center justify-between gap-5">
            <input
              type="text"
              placeholder="*First name"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none capitalize"
            />

            <input
              type="text"
              placeholder="*Last name"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none capitalize"
            />
          </div>
        </span>
      </div>

      <div className="w-full px-1 py-3 flex flex-col gap-6 border-t-[2.5px] border-t-gray-500/30">
        <h1 className="font-medium text-[17px]">Delivery address</h1>

        <span className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col 1sm:flex-row items-center justify-between gap-5">
            <input
              type="text"
              placeholder="*House name/number"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />

            <input
              type="text"
              placeholder="*Street"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />
          </div>

          <div className="w-full flex flex-col 1sm:flex-row items-center justify-between gap-5">
            <input
              type="text"
              placeholder="*City"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />

            <input
              type="text"
              placeholder="*State"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />
          </div>

          <div className="w-full flex flex-col 1sm:flex-row items-center justify-between gap-5">
            <input
              type="text"
              placeholder="*Country"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />

            <input
              type="text"
              placeholder="*Postcode"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />
          </div>
        </span>
      </div>

      <div className="w-full px-1 py-3 flex flex-col gap-6 border-t-[2.5px] border-t-gray-500/30">
        <h1 className="font-medium text-[17px]">Contact info</h1>

        <span className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col 1sm:flex-row items-center justify-between gap-5">
            <input
              type="text"
              placeholder="*Dailing code"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />

            <input
              type="text"
              placeholder="*Mobile/Cell number"
              className="1sm:w-[48%] w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between gap-5">
            <input
              type="email"
              placeholder="*Email address"
              className="w-full bg-slate-400/10 px-3 py-2 text-[17px] font-medium outline-none"
            />
          </div>
        </span>
      </div>

      <div className="w-full px-1 py-5 flex flex-col gap-6 border-t-[2.5px] border-t-gray-500/30">
        <span className="w-full flex sm:items-center items-start 1sm:gap-3 gap-2 mb-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-6 1sm:w-5 h-6 1sm:h-5 border-[2px] border-gray-300 rounded checked:bg-[--third] cursor-pointer flex items-center justify-center 1sm:text-[15px] text-[13px] text-[--light]"
          />

          <h4 className="md:text-[15px] 1sm:text-[14px] text-[13px] font-semibold text-[#555] hover:text-black">
            *I have read and understood the El-Clasico
            <span className="underline cursor-pointer"> privacy policy</span>.
          </h4>
        </span>

        <span className="w-full flex items-center 1sm:justify-end justify-center">
          <NavLink
            to={isChecked ? "/appreciation" : ""}
            className={
              isChecked
                ? "1sm:w-[250px] w-[95%] py-2 text-[18px] font-semibold flex items-center justify-center gap-3 text-[--light] bg-[--third] hover:brightness-90"
                : "1sm:w-[250px] w-[95%] py-2 text-[18px] font-semibold flex items-center justify-center gap-3 text-[--light] bg-[#999] hover:brightness-90 cursor-not-allowed"
            }
          >
            Submit
            <IoMdSend />
          </NavLink>
        </span>
      </div>
    </section>
  );
};
export default MainForm;
