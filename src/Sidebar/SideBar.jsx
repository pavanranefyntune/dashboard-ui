import sidebarData from './sidebar.constant'
import {FiLogOut} from "react-icons/fi";
import userpic from '../../src/assets/user.jpg'
import {Link} from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col p-2">
      <Link to="/">
      <p className=" mb-8 lg:text-2xl md:text-xl text-md font-bold p-4">Niond</p>
      </Link>
    <div className="flex flex-col justify-between gap-3 lg:text-sm text-[0.5rem] md:text-[0.7rem] font-bold">

      { sidebarData.map((sData) => (
        <Link to={sData.path} key={sData.id} >
          <p className="lg:p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center" draggable>{<sData.icon/>}{sData.name}</p>
           </Link> 
     )) }   
     
        </div>

    <div className="flex flex-col justify-between items-center mt-16">
    <div  className="flex flex-col items-center">
      <img src={userpic} alt="" className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px] text-center rounded-full mb-2"/>
      <p className="lg:text-sm text-xs text-center font-bold">Nora Watson</p>
      <p className="lg:text-xs text-[9px] text-center text-gray-400">Sales Manager</p>
    </div>
       <p className="p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center lg:text-xs text-[10px] font-medium mt-10"><FiLogOut/>Log Out</p>
    </div>
    </div>
  )
}

export default SideBar;
