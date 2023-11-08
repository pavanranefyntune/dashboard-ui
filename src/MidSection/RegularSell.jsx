import graph from "../assets/graph.jpg"

const RegularSell = () => {


  return (
    <div className="flex flex-col bg-white w-3/5">
      <div className="flex justify-between p-2">
        <p className="font-bold">Regular Sell</p>
        <button className="bg-[#CDF463] p-1 rounded-md text-xs font-bold">Export</button>
      </div>
      <div>
      <img src={graph} alt="" className="h-38 w-50 p-4" />
      </div>
      
    </div>
  );
};

export default RegularSell;
