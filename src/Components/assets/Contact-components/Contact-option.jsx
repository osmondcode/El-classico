import { VscLinkExternal } from "react-icons/vsc";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import { useState } from "react";

const ContactOption = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    // Toggle the clicked dropdown, and close others by setting the state
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close the currently open dropdown
    } else {
      setOpenDropdown(dropdownId); // Open the clicked dropdown
    }
  };
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[100px]">
      {/* MINI DROP DOWN */}
      <span className="2sm:w-[85%] w-[95%] flex items-start justify-between 2sm:gap-5 gap-4 flex-wrap">
        <div className="w-full border-b-[2px] border-b-slate-400/60 pb-2">
          <div
            className={
              openDropdown === 1
                ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 px-2 py-3"
                : "font-medium w-full flex items-center justify-between cursor-pointer px-2 py-3"
            }
            onClick={() => toggleDropdown(1)}
          >
            <h1 className="2sm:text-[22px] sm:text-[19px] text-[16px]">
              Sales and general enquiries
            </h1>
            {openDropdown === 1 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {openDropdown === 1 && (
            <div className="flex flex-col items-start justify-start gap-4 text-[15px] font-light py-2 px-3 mb-3">
              <p className="pb-2 2sm:pt-5 pt-3 2sm:text-[16px] sm:text-[15px] text-[14px]">
                If you would like to discuss your purchasing interest with
                El-Clasico Automobile directly or have a general query, please
                contact us on one of the following numbers:
              </p>
              <div className="w-full 2sm:py-3 py-1 flex flex-col items-center justify-center gap-2 font-normal">
                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 text-[13px] sm:text-[14px] 2sm:text-[16px]">
                  <p className="w-[40%]">REGION</p>
                  <p className="w-fit sm:w-[45%]">CONTACT NUMBER</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United Kingdom</p>
                  <p className="w-fit sm:w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United States</p>
                  <p className="w-fit sm:w-[45%]">+5 800 777 6923</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Europe</p>
                  <p className="w-fit sm:w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">China</p>
                  <p className="w-fit sm:w-[45%]">+76 400 119 8880</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Japan</p>
                  <p className="w-fit sm:w-[45%]">+75 120 97 7797</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South Korea</p>
                  <p className="w-fit sm:w-[45%]">+58 (0)2 3448 2700</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South East Asia & Australasia</p>
                  <p className="w-fit sm:w-[45%]">+51 280466202</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 border-b-[1px] border-b-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Rest of the World</p>
                  <p className="w-fit sm:w-[45%]">+16 280466202</p>
                </span>
              </div>
              <p className=" 2sm:text-[16px] sm:text-[15px] text-[14px] ">
                Alternatively, if you are interested in purchasing a car and
                would like to receive a phone call, please click on the Sales
                Enquiry button below.
              </p>
              <button className="sm:w-fit w-full h-fit px-3 font-medium bg-[--third] py-2.5 text-[--light] sm:mt-[40px] mt-[20px] hover:brightness-75 duration-100 text-[14px] 2sm:text-[14px]">
                ENQUIRE TO BUY
              </button>
            </div>
          )}
        </div>
        <div className="w-full border-b-[2px] border-b-slate-400/60 pb-2">
          <div
            className={
              openDropdown === 2
                ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 px-2 py-3"
                : "font-medium w-full flex items-center justify-between cursor-pointer px-2 py-3"
            }
            onClick={() => toggleDropdown(2)}
          >
            <h1 className="2sm:text-[22px] sm:text-[19px] text-[16px]">
              Owner enquiries
            </h1>
            {openDropdown === 2 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {openDropdown === 2 && (
            <div className="flex flex-col items-start justify-start gap-4 text-[15px] font-light py-2 px-3 mb-3">
              <p className=" 2sm:text-[16px] sm:text-[15px] text-[14px] ">
                If you are a car owner and have an enquiry, please contact us on
                one of the following numbers:
              </p>
              <div className="w-full py-3 flex flex-col items-center justify-center gap-2 font-normal">
                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 text-[13px] sm:text-[14px] 2sm:text-[16px]">
                  <p className="w-[40%]">REGION</p>
                  <p className="w-[45%]">CONTACT NUMBER</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United Kingdom</p>
                  <p className="w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United States</p>
                  <p className="w-[45%]">+5 800 777 6923</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Europe</p>
                  <p className="w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">China</p>
                  <p className="w-[45%]">+76 400 119 8880</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Japan</p>
                  <p className="w-[45%]">
                    0120 97 7797 (only available inside Japan)
                  </p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South Korea</p>
                  <p className="w-[45%]">+58 (0)2 3448 2700</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South East Asia & Australasia</p>
                  <p className="w-[45%]">+51 280466202</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 text-[13px] sm:text-[14px] 2sm:text-[16px] border-[2px]">
                  <p className="w-[40%]">Rest of the World</p>
                  <p className="w-[45%]">+16 280466202</p>
                </span>
              </div>
              <p className=" 2sm:text-[16px] sm:text-[15px] text-[14px] ">
                Alternatively, find the contact details of your retailer, by
                clicking on the Locate A Dealer button below.
              </p>
              <button className="sm:w-fit w-full h-fit px-3 font-medium bg-[--third] py-2.5 text-[--light] sm:mt-[40px] mt-[20px] hover:brightness-75 duration-100 text-[14px] 2sm:text-[14px]">
                LOCATE DEALER
              </button>
            </div>
          )}
        </div>
        <div className="w-full border-b-[2px] border-b-slate-400/60 pb-2">
          <div
            className={
              openDropdown === 3
                ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 px-2 py-3"
                : "font-medium w-full flex items-center justify-between cursor-pointer px-2 py-3"
            }
            onClick={() => toggleDropdown(3)}
          >
            <h1 className="2sm:text-[22px] sm:text-[19px] text-[16px]">
              Business enquiries
            </h1>
            {openDropdown === 3 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {openDropdown === 3 && (
            <div className="flex flex-col items-start justify-start gap-4 text-[15px] font-light py-2 px-3 mb-3">
              <p className=" 2sm:text-[16px] sm:text-[15px] text-[14px] ">
                To contact El-Clasico Automobile regarding all general business
                enquiries, please contact us on one of the following telephone
                numbers:
              </p>
              <div className="w-full py-3 flex flex-col items-center justify-center gap-2 font-normal">
                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 text-[13px] sm:text-[14px] 2sm:text-[16px]">
                  <p className="w-[40%]">REGION</p>
                  <p className="w-[45%]">CONTACT NUMBER</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United Kingdom</p>
                  <p className="w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">United States</p>
                  <p className="w-[45%]">+5 800 777 6923</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Europe</p>
                  <p className="w-[45%]">+33 (0) 1270 653 653</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">China</p>
                  <p className="w-[45%]">+76 400 119 8880</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Japan</p>
                  <p className="w-[45%]">
                    0120 97 7797 (only available inside Japan)
                  </p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South Korea</p>
                  <p className="w-[45%]">+58 (0)2 3448 2700</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">South East Asia & Australasia</p>
                  <p className="w-[45%]">+51 280466202</p>
                </span>

                <span className="sm:w-[95%] w-full border-t-[1px] border-t-black/50 flex items-center justify-between sm:p-3 p-1.5 2sm:text-[14px] sm:text-[13px] text-[12px]">
                  <p className="w-[40%]">Rest of the World</p>
                  <p className="w-[45%]">+16 280466202</p>
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full border-b-[2px] border-b-slate-400/60 pb-2">
          <div
            className={
              openDropdown === 4
                ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 px-2 py-3"
                : "font-medium w-full flex items-center justify-between cursor-pointer px-2 py-3"
            }
            onClick={() => toggleDropdown(4)}
          >
            <h1 className="2sm:text-[22px] sm:text-[19px] text-[16px]">
              Office locations
            </h1>
            {openDropdown === 4 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {openDropdown === 4 && (
            <div className="flex flex-col items-start justify-start gap-4 text-[15px] font-light py-2 px-3 mb-3">
              <div className="w-full pt-3 flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    UK company headquarters
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Pyms Lane, Cheshire, CW1 3PL, England
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    +34 (0) 1270 255 155
                  </p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    Americas & Caribbean
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">
                    1950 Opportunity Way, 15th Floor, VA 201910 USA
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    {" "}
                    +1 800 117 6923
                  </p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    Europe
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Am Söldnermoos17, Germany Germany
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    +87 (0)1270 653 653
                  </p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    Middle East, India & Africa
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">AVME</p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Dubai Airport Freezone, East Wing, 9th floor
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Dubai, United Arab Emirates
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]"> +71 4 2936 970</p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    China
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    Volkswagen Group China Import Co.Ltd
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]"> V-Space, No 12</p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Qisheng Middle Street
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Chaoyang District
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]"> Beijing 100028</p>
                  <p className="text-[13px] 2sm:text-[16px]">China</p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    +68 400 119 8880
                  </p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    Japan
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">
                    P 18F Gotenyama, Shinagawa-ku, Tokyo, Japan, 140-0001
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    +18 (0) 355 75 73 48
                  </p>
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2 font-normal">
                <span className="2sm:w-[95%] w-full flex flex-col items-start justify-start sm:pt-3 pt-1">
                  <h4 className="text-[13px] 2sm:text-[15px] font-semibold">
                    South East Asia & Australasia
                  </h4>
                  <h5 className="text-[13px] 2sm:text-[15px] font-medium">
                    El-Clasico Automobile
                  </h5>
                  <p className="text-[13px] 2sm:text-[16px]">
                    A Division of Audi Singapore Pte Ltd
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    8 Kallang Avenue
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Aperia Tower 1, #08-01 to 09
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]">
                    Singapore 339509
                  </p>
                  <p className="text-[13px] 2sm:text-[16px]"> +56 6718 6000</p>
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full border-b-[2px] border-b-slate-400/60 pb-2">
          <div
            className={
              openDropdown === 5
                ? "font-medium w-full flex items-center justify-between cursor-pointer bg-slate-400/10 px-2 py-3"
                : "font-medium w-full flex items-center justify-between cursor-pointer px-2 py-3"
            }
            onClick={() => toggleDropdown(5)}
          >
            <h1 className="2sm:text-[22px] sm:text-[19px] text-[16px]">
              Franchise information
            </h1>
            {openDropdown === 5 ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {openDropdown === 5 && (
            <div className="flex flex-col items-start justify-start gap-4 text-[15px] font-light py-2 px-3 mb-3">
              <p className="pb-2 2sm:pt-5 pt-3 2sm:text-[16px] sm:text-[15px] text-[14px]">
                For further information on how to become an official El-Clasico
                franchise please click the button below.
              </p>

              <button className="sm:w-fit w-full h-fit px-3 font-medium bg-[--third] py-2.5 text-[--light] sm:mt-[40px] mt-[20px] hover:brightness-75 duration-100 text-[14px] 2sm:text-[14px]">
                FIND OUT MORE
              </button>
            </div>
          )}
        </div>
      </span>
      {/* MINI DROP DOWN */}
    </section>
  );
};
export default ContactOption;
