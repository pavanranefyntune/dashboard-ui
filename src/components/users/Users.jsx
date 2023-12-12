import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Users = ({ openModal, data, Active, setUsersData }) => {
  const columns = [
    {
      header: "First Name",
      accessorKey: "first_name",
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Username",
      accessorKey: "username",
    },

    {
      header: "Actives",
      cell: ({ row }) => (
        <div>
          <Active row={row} data={data} setUsersData={setUsersData} />
        </div>
      ),
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [toggle, setToggle] = useState(false);

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    state: {
      sorting: sorting,
      globalFilter: filtered,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltered,
  });

  return (
    <div className="flex flex-col ms-[15vw] w-[85vw] p-4 relative top-[10vh] ">
      <div className="flex justify-between px-4 py-2">
        {/* search bar */}

        <div className="flex gap-4">
          <input
            type="text"
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
            className="w-48 rounded-full outline-none px-4 py-1 border"
            placeholder="Search here"
          />

          {/* add user button */}
          <button onClick={() => openModal()}>
            <IoMdPersonAdd className="w-[1.5rem] h-[1.5rem] text-[#62629C]" />
          </button>
        </div>

        {/* filter button */}
        <button onClick={() => setToggle(!toggle)} className="text-[#62629C]">
          <IoFilterSharp className="h-[1.8rem] w-[1.8rem]" />
        </button>
      </div>

      {/* toggle to open filter modal */}

      {toggle && (
        <div className=" border-2 border-[#62629C] text-[#3f3e3e] font-bold rounded w-72 z-30 absolute right-16 bg-white top-8">
          <div className="px-1 border-b border-black">
            <label>
              <input
                {...{
                  type: "checkbox",
                  checked: table.getIsAllColumnsVisible(),
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
      )}

      {/* users table */}

      <header className="text-xl font-bold px-4 border-b-2 text-[#62629C]">
        {`User's Data`}
      </header>

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#ABA9BB] p-2">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex justify-center items-center text-[#3f3e3e] ">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: <IoIosArrowDown />, desc: <IoIosArrowUp /> }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-center p-2 border-b">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination buttons */}

      <div className="flex justify-center p-2 gap-1                                                  ">
        <button
          className="m-2 py-1 px-2 border-2 border-[#ABA9BB] font-bold text-[#3f3e3e] rounded-xl disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.setPageIndex(0)}
          disabled={table.getState().pagination.pageIndex + 1 === 1}
        >
          First Page
        </button>

        <button
          className="m-2 py-1 px-2 border-2 border-[#ABA9BB] font-bold text-[#3f3e3e] rounded-xl disabled:cursor-not-allowed disabled:text-gray-400"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>

        <div className="flex items-center gap-1">
          <span className="font-bold text-[#3f3e3e]">
            {table.getState().pagination.pageIndex + 1}
          </span>

          <span className="font-bold text-[#62629C]"> of </span>

          <span className="font-bold text-[#3f3e3e]">
            {table.getPageCount()}
          </span>
        </div>

        <button
          className="m-2 py-1 px-2 border-2 border-[#ABA9BB] rounded-xl font-bold text-[#3f3e3e] disabled:cursor-not-allowed disabled:text-gray-400"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>

        <button
          className="m-2 py-1 px-2 border-2 border-[#ABA9BB] rounded-xl font-bold text-[#3f3e3e] disabled:cursor-not-allowed disabled:text-gray-400"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={
            table.getState().pagination.pageIndex + 1 == table.getPageCount()
          }
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default Users;
