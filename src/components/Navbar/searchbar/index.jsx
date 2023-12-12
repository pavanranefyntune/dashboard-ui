import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import useSearchbar from "./useSearchbar";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [show, setShow] = useState(false);

  const { filteredList, selected, setSelected, query, setQuery, inputRef } =
    useSearchbar();

  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && show) {
      event.preventDefault();
      const selectedOption = filteredList.find((item) => item === selected);
      if (selectedOption) {
        navigate(selectedOption.path);
      }
    }
  };

  return (
    <div className="w-72 ">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div
            className="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left 
          shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 
          focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
          >
            <Combobox.Input
              className="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 
              focus:ring-0"
              displayValue={(item) => item.name}
              onChange={(event) => setQuery(event.target.value)}
              ref={inputRef}
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              onKeyDown={handleKeyDown}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            show={show}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 
            text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
              {filteredList.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredList.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={({ active }) =>
                      `relative select-none py-2 pl-10 pr-4 cursor-pointer hover:bg-teal-600 hover:text-white ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
