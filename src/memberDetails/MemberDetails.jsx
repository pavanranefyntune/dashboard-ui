import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Member from "../RightSection/Member";
const MemberDetails = () => {
    const { id } = useParams();
    console.log("id", id)
    const members = useSelector(state => state.members.memberList)

    const memberDetails = members.find((member) => member.id == id)
    console.log(memberDetails)

    return (
      <div className="flex justify-between w-[85vw] py-6 px-20">
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-2xl font-bold">Team Member</p>
          <div className="flex flex-col items-center gap-2">
            <img src={memberDetails.userpic} alt="" className='w-[12rem] h-[12rem] rounded-full object-cover' />
            <p className="text-xl font-bold">{memberDetails.name}</p>
            <p className="text-md font-bold">{memberDetails.designation}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-xl font-bold">Team Members</p>
          <div className="flex flex-col gap-4">
        {
            members.map((member) => (
              <Member key={member.id}
              name={member.name}
              designation={member.designation}
              userpic={member.userpic}
              id ={member.id}
              />
            ))
          }
          </div>
        </div>
        </div>
    )
}

export default MemberDetails;