const TopStore = () => {
    return (
      <div className="py-4 w-full bg-white rounded-md mr-6">
        <div className="flex justify-between ml-2 mb-2 px-2">
            <p className="font-bold">Top Store</p>
            <p className="px-2 py-1 rounded-md text-xs bg-[#CDF463]">Share</p>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left px-2 py-1 text-sm border-b border-gray-300 text-gray-300 font-normal">Store Name</th>
              <th className="text-left px-2 py-1 text-sm border-b border-gray-300 text-gray-300 font-normal">Location</th>
              <th className="text-left px-2 py-1 text-sm border-b border-gray-300 text-gray-300 font-normal">Sell</th>
              <th className="text-left px-2 py-1 text-sm border-b border-gray-300 border-bottom-2 text-gray-300 font-normal">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left px-2 py-1 text-sm">Solaris Sparkle</td>
              <td className="text-left px-2 py-1 text-sm">Crimson Dusk</td>
              <td className="text-left px-2 py-1 text-sm">Indigo Zephyr</td>
              <td className="text-left px-2 py-1 text-sm">Roseate Crest</td>
            </tr>
            <tr>
              <td className="text-left px-2 py-1 text-sm">Miami, Florida</td>
              <td className="text-left px-2 py-1 text-sm">Denver, Colorado</td>
              <td className="text-left px-2 py-1 text-sm">Orlando, Florida</td>
              <td className="text-left px-2 py-1 text-sm">Las Vegas, Nevada</td>
            </tr>
            <tr>
              <td className="text-left px-2 py-1 text-sm">102 Quantity</td>
              <td className="text-left px-2 py-1 text-sm">214 Quantity</td>
              <td className="text-left px-2 py-1 text-sm">145 Quantity</td>
              <td className="text-left px-2 py-1 text-sm">185 Quantity</td>
            </tr>
            <tr>
              <td className="text-left px-2 py-1 text-sm">12.50K</td>
              <td className="text-left px-2 py-1 text-sm">0.7.85K</td>
              <td className="text-left px-2 py-1 text-sm">16.40K</td>
              <td className="text-left px-2 py-1 text-sm">23.64K</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TopStore;
  