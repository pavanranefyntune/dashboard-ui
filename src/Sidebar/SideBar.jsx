import {useState} from "react";
import sidebarData from './sidebar.constant';
import {FiLogOut} from "react-icons/fi";
import userpic from '../../src/assets/user.jpg';
import {Link} from "react-router-dom";

const SideBar = () => {
 const [sideBarData, setSideBarData] = useState(sidebarData)

 const handleDrag = (e, id) => {
  e.dataTransfer.setData("id", id);
};

const dragOver = (e) => {
  e.preventDefault();
};

 const handleDrop = (e, droppedItemId) => {
  const draggedId = e.dataTransfer.getData("id");

  const item = sideBarData.find((item) => item.id == draggedId);

  if (!item) {
    return;
  }

  const updatedSidebarData = sideBarData.filter((item) => item.id != draggedId);

  const targetIndex = updatedSidebarData.findIndex((item) => item.id === droppedItemId);

  if (targetIndex !== -1) {
    updatedSidebarData.splice(targetIndex, 0, item);
    setSideBarData(updatedSidebarData);
  }
};


  return (
    <div className="flex flex-col p-2">
      <Link to="/">
      <p className=" mb-8 lg:text-2xl md:text-xl text-md font-bold p-4">Niond</p>
      </Link>
    <div className="flex flex-col justify-between gap-3 lg:text-sm text-[0.5rem] md:text-[0.7rem] font-bold">

      { sideBarData.map((sData) => (
        <Link to={sData.path} key={sData.id}  draggable
        onDragStart={(e) => handleDrag(e, sData.id)}
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => handleDrop(e, sData.id)}
        >
          <p className="lg:p-[8px] rounded-md hover:bg-[#CDF463] cursor-pointer gap-2 flex items-center">{<sData.icon/>}{sData.name}</p>
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
