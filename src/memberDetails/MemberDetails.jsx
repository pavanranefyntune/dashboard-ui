import { useSelector } from "react-redux";
import { useParams } from "react-router";
const MemberDetails = () => {
    const { id } = useParams();
    console.log("id", id)
    const members = useSelector(state => state.members.memberList)

    const memberDetails = members.find((member) => member.id == id)
    console.log(memberDetails)

    return (
        <div>
          <p>Team Member</p>
          <div>
            <img src={memberDetails.userpic} alt="" className='w-6 h-6 rounded-full object-cover' />
          </div>
        </div>
    )
}

export default MemberDetails;