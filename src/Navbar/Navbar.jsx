import userpic from "../../src/assets/user.jpg";
import {AiFillMessage} from "react-icons/ai"
import {IoMdNotifications} from "react-icons/io"

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div>
        <p className="font-bold text-xl">Dashboard</p>
        <p className="text-gray-400 text-sm">14th Aug 2023</p>
      </div>
      <div className="ml-auto">
        <div className="flex items-center">
          <div className="flex gap-2 mr-4 items-center">
            <div className=" border border-gray-300 p-2 rounded-md">
              <AiFillMessage className="text-gray-500"/>
              </div>
            <div className=" border border-gray-300 p-2 rounded-md">
              <IoMdNotifications className="text-gray-500"/>
              </div>
          </div>
        <img src={userpic} alt="" className="w-[35px] h-[35px] text-center rounded-full mr-2"/>
        <div className="flex flex-col">
          <p className="font-bold text-sm">Nora Watson</p>
          <p className="text-xs text-gray-400">Sales Manager</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar