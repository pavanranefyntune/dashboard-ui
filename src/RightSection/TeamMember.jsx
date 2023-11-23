import Member from "./Member";
import {IoAdd} from "react-icons/io5";
import {useSelector, useDispatch} from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { addMember } from "../Redux/membersSlice";


const fetchMembers = async () => {
   const response = await fetch("https://gorest.co.in/public/v2/users?page=1&per_page=4", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
    }
   });

   if (!response.ok) {
    throw new Error("Failed to fetch members");
   }
   const data = await response.json();
   return data
}


// eslint-disable-next-line react/prop-types
const TeamMember = ({openModal}) => {
  // const memberList = useSelector(state => state.members.memberList)
   const dispatch = useDispatch();
  const {data: members, isLoading, error} = useQuery({
     queryKey: ["myMembers"],
     queryFn : fetchMembers,
  })
 
    if(members) {
      dispatch(addMember(members))
      console.log("fetched members", members)
    }
 
  
  const darkMode = useSelector(state => state.theme.darkMode)
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

 

  return (
    <div className={`${darkMode ? "bg-[#333A45]" : "bg-white"} p-1 flex flex-col items-center py-2 rounded-md`}>
        <p className={`font-bold ml-2 ${darkMode && "text-white"}`}>Team Member</p>
        <div className={`${darkMode ? "bg-[#333A45]" : "bg-white"} flex flex-col gap-2 p-2`}>
          {
            members?.map((member) => (
              <Member key={member.id}
              name={member.name}
              email={member.email}
              gender={member.gender}
              status={member.status}
              id ={member.id}
              />
            ))
          }
        </div>
        <div className="flex items-center">
          <button className="text-xs font-bold flex items-center gap-2 bg-[#AAC9FF] rounded-md px-1 py-2"
          onClick={openModal}
          >
            <IoAdd  className="bg-white rounded-full"/>
            Add More Member</button>
          </div>
    </div>
  )
}

export default TeamMember;