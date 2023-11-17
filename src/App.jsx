import SideBar from "./Sidebar/SideBar";
import Navbar from "./Navbar/Navbar";
import Cards from "./TopSection/Cards";
import MidSection from "./MidSection/MidSection";
import TopStore from "./Bottom/TopStore";
import RightSection from "./RightSection/RightSection";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MemberDetails from "./memberDetails/MemberDetails";
import Users from "./users/Users";


const App = () => {

  return (
    <Router>
    <div className="flex w-full h-screen relative box-border p-0 m-0">
      <div className="w-[15vw] fixed top-0 z-40 bg-white">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={
      <div className="flex flex-col ms-[15vw] bg-[#EFF3F4]">
        <div className="w-[85vw]  sticky top-0 z-10 bg-[#EFF3F4] py-2 px-6">
        <Navbar />
        </div>
        
        <div className="w-[85vw] flex bg-[#EFF3F4]">
          <div className="w-[62vw] flex flex-col gap-6 pl-10 mr-12">
            <Cards />
            <MidSection />
            <TopStore />
          </div>
          <div className="w-[23vw] pr-8">
            <RightSection />
          </div>
        </div>
      </div>
      }>
      </Route>
      <Route
      path="/userDetails/:id"
      element={
        <MemberDetails/>
      }
      >

      </Route>
      <Route 
      path="/users"
      element={
        <div>
        <Users/>
        </div>
      }
      >

      </Route>
      </Routes>
    </div>
    </Router>
  );
};

export default App;