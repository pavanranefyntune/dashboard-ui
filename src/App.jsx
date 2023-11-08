import SideBar from "./Sidebar/SideBar";
import Navbar from "./Navbar/Navbar";
import Cards from "./TopSection/Cards";
import MidSection from "./MidSection/MidSection";
import TopStore from "./Bottom/TopStore";
import RightSection from "./RightSection/RightSection";

const App = () => {

  return (
    <div className="flex w-full h-screen overflow-x-hidden relative box-border p-0 m-0">
      <div className="w-[15vw] sticky top-0 z-10 bg-white">
        <SideBar />
      </div>
      <div className="w-[85vw] flex flex-col  bg-[#EFF3F4]">
        <div className="sticky top-0 z-10 bg-[#EFF3F4] py-2 px-6">
        <Navbar />
        </div>
        
        <div className="w-[85vw] flex flex-1 bg-[#EFF3F4]">
          <div className="w-[62vw] flex flex-col gap-6 pl-10">
            <Cards />
            <MidSection />
            <TopStore />
          </div>
          <div className="w-[23vw] pr-8">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;