import userpic from "../../src/assets/user.jpg";
import {AiFillMessage} from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import { Popover, Transition } from '@headlessui/react';


const Navbar = () => {
  return (
    <div className="flex p-[1rem] justify-between">
      <div>
        <p className="font-bold lg:text-2xl md:text-2xl text-xl">Dashboard</p>
        <p className="text-gray-400 text-xs ">14th Aug 2023</p>
      </div>
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
          <p className="font-bold text-sm">Nora Watson</p>
          <p className="text-xs text-gray-400">Sales Manager</p>
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