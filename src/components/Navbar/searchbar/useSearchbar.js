import data from "../../Sidebar/sidebar.constant";
import { useState, useRef, useEffect } from "react";

export default function useSearchbar() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

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

  const filteredList =
    query === ""
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

    
  return { filteredList, selected, setSelected, query, setQuery, inputRef };
}
