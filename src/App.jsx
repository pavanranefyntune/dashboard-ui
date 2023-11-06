import SideBar from "./Sidebar/SideBar";
import Navbar from "./Navbar/Navbar";
import Card from "./TopSection/Card";
import MidSection from "./MidSection/MidSection";
import TopStore from "./Bottom/TopStore";
const App = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[20%]">
      <SideBar/>
      </div>
      <div className="w-full flex p-6 flex-col gap-4 ml-8 bg-[#EFF3F4]">
      <Navbar/>
      <Card/>
      <MidSection/>
      <TopStore/>
      </div>
    </div>
  )
}

export default App;