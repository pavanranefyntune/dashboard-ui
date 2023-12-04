import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import data from "../../Sidebar/sidebar.constant";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDropdownOpen(true);
  };

  const handleItemClick = (item) => {
    setInputValue(item.name);
    setDropdownOpen(false);
  };

  const dropDownList = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="outline-none border rounded-full p-2"
        placeholder="Search Pages"
      />
      <button className="p-2 bg-black text-white rounded-full">Search</button>
      {isDropdownOpen && inputValue !== "" && (
        <ul className="bg-white text-black text-center rounded-md gap-2 p-2 m-1">
          {dropDownList.length === 0 ? (
            <li>No result found </li>
          ) : (
            dropDownList.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item.name}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
