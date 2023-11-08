import Member from "./Member";
import {IoAdd} from "react-icons/io5";
import members from "../../src/memberdata"

const TeamMember = () => {



  return (
    <div className="bg-white p-1 flex flex-col items-center py-2">
        <p className="font-bold ml-2">Team Member</p>
        <div className="bg-white flex flex-col gap-2 p-2">
          {
            members.map((member, index) => (
              <Member key={index}
              name={member.name}
              designation={member.designation}
              userpic={member.userpic}
              />
            ))
          }
        </div>
        <div className="flex items-center">
          <button className="text-xs font-bold flex items-center gap-2 bg-[#AAC9FF] rounded-md px-1 py-2"
          >
            <IoAdd  className="bg-white rounded-full"/>
            Add More Member</button>
          </div>
    </div>
  )
}

export default TeamMember