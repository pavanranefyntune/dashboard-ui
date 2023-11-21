import Member from "./Member";
import {IoAdd} from "react-icons/io5";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const TeamMember = ({openModal}) => {

  const members = useSelector(state => state.members.memberList)
  const darkMode = useSelector(state => state.theme.darkMode)


  return (
    <div className={`${darkMode ? "bg-[#333A45]" : "bg-white"} p-1 flex flex-col items-center py-2`}>
        <p className={`font-bold ml-2 ${darkMode && "text-white"}`}>Team Member</p>
        <div className={`${darkMode ? "bg-[#333A45]" : "bg-white"} flex flex-col gap-2 p-2`}>
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