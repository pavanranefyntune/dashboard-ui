import {BiSolidDashboard} from "react-icons/bi";
import {BiStats} from "react-icons/bi";
import {GrTransaction} from "react-icons/gr";
import {RiTeamFill} from "react-icons/ri";
import {IoIosStats} from "react-icons/io";
import {IoIosSettings} from "react-icons/io";
import {FiLogOut} from "react-icons/fi";
import userpic from '../../src/assets/user.jpg'

const SideBar = () => {
  return (
    <div className="flex flex-col  h-screen border-red-200 p-6">
    <div className="flex flex-col mb-[100px]">
      <p className=" mb-8 text-2xl font-bold">Niond</p>
        <div className="flex flex-col gap-3 text-sm font-bold">
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><BiSolidDashboard/>DashBoard</p>
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><BiStats/>Statistic</p>
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><GrTransaction/>Transaction</p>
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><RiTeamFill/>My Team</p>
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><IoIosStats/>Sell Reports</p>
          <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center"><IoIosSettings/>Setting</p>
        </div>

    </div>
    <div className="flex flex-col justify-between items-center">
    <div  className="flex flex-col items-center">
      <img src={userpic} alt="" className="w-[35px] h-[35px] text-center rounded-full mb-2"/>
      <p className="text-sm text-center font-bold">Nora Watson</p>
      <p className="text-xs text-center text-gray-400">Sales Manager</p>
    </div>
       <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center text-xs font-medium mt-10"><FiLogOut/>Log Out</p>
    </div>
    </div>
  )
}

export default SideBar;