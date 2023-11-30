import userpic from "../../src/assets/user.jpg";
import {AiFillMessage} from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import { Popover, Transition } from '@headlessui/react';
import { Switch } from "@headlessui/react";
import {useSelector,  useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";
import useUserDetails from "../Custom hook/useUserDetails";

const Navbar = () => {

  const {service} = useUserDetails();

  const darkMode = useSelector(state => state.theme.darkMode)
  const dispatch = useDispatch();

  return (
    <div className="flex p-[1rem] justify-between">
      <div>
        <p className={`font-bold lg:text-2xl md:text-2xl text-xl ${darkMode && "text-white"}`}>Dashboard</p>
        <p className="text-gray-400 text-xs ">14th Aug 2023</p>
      </div>
      <div className="flex items-center">
        <Switch
  checked={darkMode}
  onChange={() => dispatch(toggleTheme())}
  className={`${
    darkMode ? 'bg-white' : 'bg-black'
  } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
>
  <span className="sr-only">Enable notifications</span>
  <span
    className={`${
      darkMode ? 'bg-[#e4da59] translate-x-6' : 'bg-white translate-x-1'
    } inline-block h-4 w-4 transform rounded-full transition`}
  />
</Switch>
<div className="lg:flex  items-center hidden">

          <div className="flex gap-2 mr-4 items-center">
            <div className=" border border-gray-300 p-2 rounded-md">
              <AiFillMessage className="text-gray-500"/>
              </div>
            <div className=" border border-gray-300 p-2 rounded-md">
              <IoMdNotifications className="text-gray-500"/>
              </div>
          </div>
          <div className="flex">
          
            <img src={userpic} alt="" className="w-[35px] h-[35px] text-center rounded-full mr-2"/>
        <div className="flex flex-col">
          <p className={`font-bold text-sm ${darkMode && "text-white"}`}>{service?.data?.name}</p>
          <p className="text-xs text-gray-400">{service?.data?.email}</p>
          </div>
        </div>
        </div>
      </div>
      <Popover className="lg:hidden flex flex-col items-center">
      <Popover.Button><img src={userpic} alt="" className="w-[35px] h-[35px] text-center rounded-full mr-2"/></Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Popover.Panel className=" z-10">
        <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="font-bold text-sm">Nora Watson</p>
          <p className="text-xs text-gray-400">Sales Manager</p>
          </div>
        </div>

      </Popover.Panel>
      </Transition>
    </Popover>
    </div>
  )
}

export default Navbar