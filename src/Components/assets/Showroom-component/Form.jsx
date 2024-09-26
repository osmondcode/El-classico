import ShowHeader from "./ShowRoom-Header";
import { MdCheck } from "react-icons/md";
import MainForm from "./MainForm";
import SideBar from "../Other-component/SideBar";

const Form = ({ sideBarHandle, sideBar }) => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start relative">
      <ShowHeader sideBarHandle={sideBarHandle} />
      {sideBar && <SideBar sideBarHandle={sideBarHandle} />}

      <div className="w-full flex flex-col items-center justify-start px-[20px] 1sm:mt-[80px] mt-[60px] gap-2">
        <h1 className="2md:text-[30px] 1sm:text-[26px] text-[22px] 2md:mb-2 mb-0">
          Enquire to buy
        </h1>
        <p className="2md:text-[14px] 1sm:text-[13px] text-[12.5px] 2md:mb-2 mb-0">
          Make every journey extraordinary
        </p>
        <p className="2md:text-[13px] 1sm:text-[12px] text-[11.5px] font-semibold">
          *denotes mandatory field
        </p>

        <div className="1sm:w-[95%] w-full bg-slate-300/60 mt-7 flex flex-col 2sm:gap-6 gap-4 lg:px-[5%] 2sm:px-[30px] px-[15px] 2sm:py-6 py-4">
          <h3 className="text-[15px] font-medium">What happens next</h3>

          <span className="w-full flex items-start justify-between gap-6 2md:flex-nowrap flex-wrap">
            <div className="lg:w-1/3 w-fit flex gap-3">
              <p>
                <MdCheck />
              </p>
              <p className="pt-1 text-[13.5px]">
                Your preferred dealer will be in touch with you within the next
                48 hours to discuss your enquiry
              </p>
            </div>

            <div className="lg:w-1/3 w-fit flex gap-3">
              <p>
                <MdCheck />
              </p>
              <p className="pt-1 text-[13.5px]">
                You can arrange a visit to the dealership, discuss prices or
                book a test drive appointment
              </p>
            </div>

            <div className="lg:w-1/3 w-fit flex gap-3">
              <p>
                <MdCheck />
              </p>
              <p className="pt-1 text-[13.5px]">
                Please ensure that the information you provide is accurate and
                complete, or it could mean that we are unable to process your
                enquiry
              </p>
            </div>
          </span>
        </div>

        <MainForm />
      </div>
    </section>
  );
};

export default Form;
