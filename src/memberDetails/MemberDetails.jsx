import { useParams } from "react-router";
import {fetchMemberDetails} from "../Api/Crud"
import { useQuery } from "@tanstack/react-query";
// import Member from "../RightSection/Member";

const MemberDetails = () => {
    const { id } = useParams();

    const {data: member, isLoading, error} = useQuery({
      queryKey: ["myMembers", id],
      queryFn : () => fetchMemberDetails(id),
   })
   
   if (isLoading) {
     return <p>Loading...</p>;
   }
   
   if (error) {
     return <p>Error: {error.message}</p>;
   }
  
   const {name, email, gender, status} = member;
   
    return (
      <div className="flex justify-between ms-[15vw] w-[85vw] py-6 px-10 lg:px-20">
        <div className="flex flex-col items-center gap-2 w-[40vw] ">
          <p className="text-2xl font-bold mb-6">Team Member</p>
          <div className="flex flex-col items-center gap-2">
            { member && (
            <div className=" flex flex-col  items-center gap-4 p-4 shadow-2xl">
            <p className="text-xl font-bold mt-4">{name}</p>
            <p className="text-md font-bold text-gray-400">{email}</p>
            <p className="text-md font-bold text-gray-400">{gender}</p>
            <p className="text-md font-bold text-gray-400">{status}</p>
            <p className="px-8 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Asperiores earum ab quaerat ullam maxime deleniti quas reiciendis iure nostrum 
             perspiciatis! Sunt quo et debitis officia voluptatem labore aliquam nostrum architecto!</p>
             <button className="bg-black text-white p-2 rounded-md">View Profile</button>
            </div> )}

          </div>
        </div>
        <div className="flex flex-col gap-4 w-[20vw]">
          <p className="text-xl font-bold text-center">Other Members</p>
          <div className="flex flex-col gap-4">
        {/* {
            filteredMembers[0]?.map((member) => (
              <Member key={member.id}
              name={member.name}
              email={member.email}
              gender={member.gender}
              status={member.status}
              id ={member.id}
              />
            ))
          } */}
          </div>
        </div>
        </div>
    )
}

export default MemberDetails;