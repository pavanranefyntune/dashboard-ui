import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Sidebar/sidebar.constant";
import { useRef } from "react";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef("");

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keypress", handleKey);
  }, []);

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
        ref={inputRef}
        className="outline-none border rounded-full p-2"
        placeholder="Search Pages"
      />
      {isDropdownOpen && inputValue !== "" && (
        <ul className="bg-white text-black text-center rounded-md gap-2 p-1 m-1">
          {dropDownList.length === 0 ? (
            <li>No result found </li>
          ) : (
            dropDownList.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
