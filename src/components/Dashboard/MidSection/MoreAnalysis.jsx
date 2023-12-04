import {IoStatsChart} from "react-icons/io5";
import {SlArrowRight} from "react-icons/sl";
import {IoIosPeople} from "react-icons/io";
import {IoAnalyticsSharp} from "react-icons/io5";
import {useSelector} from "react-redux";

const MoreAnalysis = () => {

  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <div className="flex flex-col gap-2 justify-center">
        <div className="mb-2">
        <p className={`font-bold lg:text-xl md:text-xl text-sm ${darkMode && "text-white "}`}>More Analysis</p>
        <p className="text-gray-400 text-xs">There are more to View</p>
        </div>
         <div className="flex flex-col gap-2">
            <div className={`w-[14rem] ${darkMode ? "bg-[#333A45] text-white" : "bg-white"} h-[2rem] flex items-center gap-2 rounded-md`}>
                <IoStatsChart className="w-[9px] ml-4"/>
            <p className="font-bold text-[10px]">Store Sell Ratio</p>
            <SlArrowRight className="h-[8px] ml-20"/>
            </div>

            <div className={`w-[14rem] ${darkMode ? "bg-[#333A45] text-white" : "bg-white"}  h-[2rem] flex items-center gap-2 rounded-md`}>
            <IoIosPeople className="w-[9px] ml-4"/>
            <p className="font-bold text-[10px] mr-2">Top Item Sold</p>
            <SlArrowRight className="h-[8px] ml-20"/>
            </div>
            
         </div>
          
         <div className="flex mt-4 ml-2">
           <p className={`text-[9px] ${darkMode && "text-white"}`}>Analysis Created by</p>
           <div className="bg-[#CDF463] p-[4px] flex items-center rounded-full ml-2">
           <IoAnalyticsSharp className="w-[9px] h-[8px]" />
           </div>
           
         </div>
    </div>
  )
}

export default MoreAnalysis