// eslint-disable-next-line react/prop-types
const FilterBox = ({ table }) => {
  return (
    <div className=" border-2 border-[#62629C] text-[#3f3e3e] font-bold rounded w-72 z-30 absolute right-16 bg-white top-8">
      <div className="px-1 border-b border-black">
        <label>
          <input
            {...{
              type: "checkbox",
              // eslint-disable-next-line react/prop-types
              checked: table.getIsAllColumnsVisible(),
              // eslint-disable-next-line react/prop-types
              onChange: table.getToggleAllColumnsVisibilityHandler(),
            }}
          />{" "}
          Toggle All
        </label>
      </div>
      {table.getAllLeafColumns().map((column) => {
        return (
          <div key={column.id} className="px-1">
            <label>
              <input
                {...{
                  type: "checkbox",
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{" "}
              {column.id}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBox;
