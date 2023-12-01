import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemberDetails from "./memberDetails/MemberDetails";
import Users from "./users/Users";
import { useSelector } from "react-redux";
import LoginPage from "./LoginPage";
import Home from "./home/Home";
import SideBar from "./Sidebar/SideBar";
import Authenticated from "./Authenticated";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <Router>
      <div className="flex w-full h-screen relative box-border p-0 m-0">
        <Routes>
          <Route path="/" element={
          <Authenticated>
            <Home />
            </Authenticated>
            }></Route>
          <Route
            path="/userDetails/:id"
            element={
              <>
                <div
                  className={`w-[15vw] fixed top-0 z-40 ${
                    darkMode ? "bg-[#333A45]" : "bg-white"
                  }`}
                >
                  <SideBar />
                </div>
                <MemberDetails />
              </>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <div>
                <div
                  className={`w-[15vw] fixed top-0 z-40 ${
                    darkMode ? "bg-[#333A45]" : "bg-white"
                  }`}
                >
                  <SideBar />
                </div>
                <Users />
               
              </div>
            }
          ></Route>
       
          <Route
            path="/login"
            element={
              <div className="w-[100vw] flex flex-col items-center justify-center">
                <LoginPage />
              </div>
            }
          ></Route>
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;