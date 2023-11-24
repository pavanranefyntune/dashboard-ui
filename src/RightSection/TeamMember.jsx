import Member from "./Member";
import {IoAdd} from "react-icons/io5";
import {useSelector} from "react-redux";
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {fetchMembers} from "../Api/Crud";
import {deleteMember} from "../Api/Crud"

// eslint-disable-next-line react/prop-types
const TeamMember = ({openModal}) => {
   const queryClient = useQueryClient();
   const darkMode = useSelector(state => state.theme.darkMode)

  const {data: members, isLoading, error} = useQuery({
     queryKey: ["myMembers"],
     queryFn : fetchMembers,
  })
  
  const deleteMutation = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["myMembers"]})
    }
  })
  
  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

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
              handleDelete={handleDelete}
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