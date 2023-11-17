import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import {useState} from "react";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data;
};

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["myUsers", currentPage],
    queryFn: fetchUsers,
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersData = users?.slice(startIndex, endIndex)

  
  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <TailSpin
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius={1}
          visible={true}
        />
      </div>
    );
  }
  
  if (error) {
    return <p>Error {error.message}</p>;
  }

  return (
    <div className="flex flex-col ms-[15vw] w-[85vw] bg-[#EFF3F4] p-4">
    <header className="text-[2rem] text-bold text-center mb-2">Users</header>
    <div className="flex flex-col items-center">
    <p className="text-gray-500 mb-1">{users.length} users found</p>
    <div className="flex flex-col w-[70vw]">
    <div className="flex font-bold md:text-base lg:text-base sm:text-xs border-b-2">
  <div className="w-1/6 p-2 text-black">User Name</div>
  <div className="w-1/6 p-2 text-gray-500">Name</div>
  <div className="w-1/6 p-2 text-black">Email</div>
  <div className="w-1/6 p-2 text-gray-500">Address</div>
  <div className="w-1/6 p-2 text-black">Phone</div>
  <div className="w-1/6 p-2 text-gray-500">Website</div>
  <div className="w-1/6 p-2 text-black">Company</div>
</div>

      <div>
        {
          usersData?.map((user) => (
            <div key={user.id} className="flex md:text-[0.7rem] lg:text-[0.7rem] sm:text-[0.6rem] border-b">
              <div className="w-1/6 p-1 text-black">{user.username}</div>
              <div className="w-1/6 p-1 text-gray-500">{user.name}</div>
              <div className="w-1/6 p-1 flex-shrink break-all text-black">{user.email.toLowerCase()}</div>
              <div className="w-1/6 p-1 text-gray-500">
                {user.address.street}, {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode}
              </div>
              <div className="w-1/6 p-1 text-black ">{user.phone}</div>
              <div className="w-1/6 p-1 text-gray-500">{user.website}</div>
              <div className="w-1/6 p-1 text-black">
                {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center gap-2">
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="border p-1">Prev</button>
      <button onClick={handleNextPage}  disabled={currentPage === 2} className="border p-1">Next</button>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Users;