import Header from "../Other-component/Header";
import Heropage from "./Contact-Hero";
import ContactOption from "./Contact-option";
import SiderBar from "../Other-component/SideBar";
const ContactPage = ({ sideBar, sideBarHandle }) => {
  return (
    <section className="w-full min-h-screen relative pb-[100px]">
      {sideBar && <SiderBar sideBarHandle={sideBarHandle} />}
      <Header sideBarHandle={sideBarHandle} />
      <Heropage />
      <ContactOption />
    </section>
  );
};
export default ContactPage;
