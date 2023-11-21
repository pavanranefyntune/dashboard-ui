import {BsCameraVideoFill} from "react-icons/bs";
import userpic from "../../src/assets/user.jpg";
import {useSelector} from "react-redux";

const Meeting = () => {

    const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <div className={`${darkMode ? "bg-[#333A45] text-white" : "bg-white"} rounded-md p-4 flex flex-col gap-4`}>
        <div className="flex justify-center items-center flex-col gap-2">
            <div className="flex  items-center gap-2">
               <div className="w-[25px] h-[25px] rounded-full bg-[#BAADFE] flex items-center justify-center p-[6px]"><BsCameraVideoFill/></div> 
                <p className="font-bold">Daily Meeting</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className={`text-[8px] ${darkMode ? "bg-[#23272F]" : "bg-[#EFF3F4]"} p-[2px] rounded-md`}>12+ Person</p>
                <p className={`text-[8px] ${darkMode ? "bg-[#23272F]" : "bg-[#EFF3F4]"} p-[2px] rounded-md`}>8:30Pm</p>
            </div>
        </div>

        <div className="flex ">
            <div className="flex">
            <img src={userpic} alt="" className="w-[25px] h-[25px] text-center rounded-full"/>
            <img src={userpic} alt="" className="w-[25px] h-[25px] text-center rounded-full ml-[-10px]"/>
            <img src={userpic} alt="" className="w-[25px] h-[25px] text-center rounded-full ml-[-10px]"/>
            </div>
            <p className="text-xs font-bold text-center">They will conduct the meeting</p>
        </div>

        <p className="text-xs text-center font-bold text-white bg-black p-1 rounded-md w-22">Click for meeting link</p>
    </div>
  )
}

export default Meeting