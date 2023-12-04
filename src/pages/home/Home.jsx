import SideBar from "../../components/Sidebar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Dashboard/TopSection/Cards";
import MidSection from "../../components/Dashboard/MidSection/MidSection";
import TopStore from "../../components/Dashboard/Bottom/TopStore";
import DashboardSidebar from "../../components/Dashboard/Dashboard Sidebar/DashboardSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <div
        className={`w-[15vw] fixed top-0 z-40 ${
          darkMode ? "bg-[#333A45]" : "bg-white"
        }`}
      >
        <SideBar />
      </div>
      <div className="flex flex-col ms-[15vw] bg-[#EFF3F4]">
        <div
          className={`w-[85vw] sticky top-0  ${
            darkMode ? "bg-[#23272F]" : "bg-[#EFF3F3]"
          } px-6`}
        >
          <Navbar />
        </div>

        <div
          className={`w-[85vw] flex ${
            darkMode ? "bg-[#23272F]" : "bg-[#EFF3F4]"
          } py-4`}
        >
          <div className="w-[62vw] flex flex-col gap-6 pl-10 mr-12">
            <Cards />
            <MidSection />
            <TopStore />
          </div>
          <div className="w-[23vw] pr-8">
            <DashboardSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
