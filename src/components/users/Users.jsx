// import { useQuery } from "@tanstack/react-query";
// import { TailSpin } from "react-loader-spinner";
// import { useState } from "react";

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!response.ok) {
//     throw new Error("Failed to fetch users");
//   }
//   const data = await response.json();
//   return data;
// };

// const Users = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const {
//     data: users,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["myUsers", currentPage],
//     queryFn: fetchUsers,
//   });

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };
//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const itemsPerPage = 5;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const usersData = users?.slice(startIndex, endIndex);

//   if (isLoading) {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <TailSpin
//           height={80}
//           width={80}
//           color="#4fa94d"
//           ariaLabel="tail-spin-loading"
//           radius={1}
//           visible={true}
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error {error.message}</p>;
//   }

//   return (
//     <div className="flex flex-col ms-[15vw] w-[85vw] bg-[#EFF3F4] p-4 ">
//       <header className="text-[2rem] text-bold text-center mb-2">Users</header>
//       <div className="flex flex-col items-center">
//         <p className="text-gray-500 mb-1">{users.length} users found</p>
//         <div className="flex flex-col w-[70vw]">
//           <div className="flex font-bold md:text-base lg:text-base sm:text-xs border-b-2">
//             <div className="w-1/6 p-2 text-black">User Name</div>
//             <div className="w-1/6 p-2 text-gray-500">Name</div>
//             <div className="w-1/6 p-2 text-black">Email</div>
//             <div className="w-1/6 p-2 text-gray-500">Address</div>
//             <div className="w-1/6 p-2 text-black">Phone</div>
//             <div className="w-1/6 p-2 text-gray-500">Website</div>
//             <div className="w-1/6 p-2 text-black">Company</div>
//           </div>

//           <div>
//             {usersData?.map((user) => (
//               <div
//                 key={user.id}
//                 className="flex md:text-[0.7rem] lg:text-[0.7rem] sm:text-[0.6rem] border-b"
//               >
//                 <div className="w-1/6 p-1 text-black">{user.username}</div>
//                 <div className="w-1/6 p-1 text-gray-500">{user.name}</div>
//                 <div className="w-1/6 p-1 flex-shrink break-all text-black">
//                   {user.email.toLowerCase()}
//                 </div>
//                 <div className="w-1/6 p-1 text-gray-500">
//                   {user.address.street}, {user.address.suite},{" "}
//                   {user.address.city}, {user.address.zipcode}
//                 </div>
//                 <div className="w-1/6 p-1 text-black ">{user.phone}</div>
//                 <div className="w-1/6 p-1 text-gray-500">{user.website}</div>
//                 <div className="w-1/6 p-1 text-black">
//                   {user.company.name}, {user.company.catchPhrase},{" "}
//                   {user.company.bs}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-center gap-2">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="border p-1"
//             >
//               Prev
//             </button>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === 2}
//               className="border p-1"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;

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
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Users = ({ openModal, data }) => {
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
      cell: (info) => (
        <button
          onClick={() => alert(JSON.stringify(info.row.original))}
          className="text-[#62629C]"
        >
          <HiOutlineDotsVertical />
        </button>
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
