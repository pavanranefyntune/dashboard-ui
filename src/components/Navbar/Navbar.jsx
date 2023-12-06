import userpic from "../../assets/user.jpg";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Redux/themeSlice";
import useUserDetails from "../../Custom hook/useUserDetails";
import Searchbar from "./searchbar/index";

const Navbar = () => {
  const { service } = useUserDetails();

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="flex p-[1rem] justify-between  z-30 h-[15vh] w-[85vw]">
      <div>
        <p
          className={`font-bold lg:text-2xl md:text-2xl text-xl ${
            darkMode && "text-white"
          }`}
        >
          Dashboard
        </p>
        <p className="text-gray-400 text-xs ">14th Aug 2023</p>
      </div>

      <Searchbar />

      <div className="flex items-center">
        <Switch
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
          className={`${
            darkMode ? "bg-white" : "bg-black"
          } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              darkMode ? "bg-[#e4da59] translate-x-6" : "bg-white translate-x-1"
            } inline-block h-4 w-4 transform rounded-full transition`}
          />
        </Switch>
        <div className="flex  items-center">
          <div className="flex gap-2 mr-4 items-center">
            <div className=" border border-gray-300 p-2 rounded-md">
              <AiFillMessage className="text-gray-500" />
            </div>
            <div className=" border border-gray-300 p-2 rounded-md">
              <IoMdNotifications className="text-gray-500" />
            </div>
          </div>
          <div className="flex">
            <img
              src={userpic}
              alt=""
              className="w-[35px] h-[35px] text-center rounded-full mr-2"
            />
            <div className="flex flex-col">
              <p className={`font-bold text-sm ${darkMode && "text-white"}`}>
                {service?.data?.name}
              </p>
              <p className="text-xs text-gray-400">{service?.data?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
