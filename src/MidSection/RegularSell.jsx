import graph from "../assets/graph.jpg";
import {useSelector} from "react-redux";

const RegularSell = () => {

  const darkMode = useSelector(state => state.theme.darkMode)
  return (
    <div className={`flex flex-col ${darkMode ? "bg-[#333A45]" : "bg-white"} sm:w-full md:w-3/5 lg:w-3/5 rounded-md`}>
      <div className="flex justify-between p-2">
        <p className={`font-bold md:text-md text-xs lg:text-lg ${darkMode && "text-white"}`}>Regular Sell</p>
        <button className="bg-[#CDF463] p-1 md:p-2 lg:p-2 rounded-md text-xs sm:text-[0.6rem] font-bold">Export</button>
      </div>
      <div>
      <img src={graph} alt="" className="h-34 w-50 p-4" />
      </div>
      
    </div>
  );
};

export default RegularSell;
