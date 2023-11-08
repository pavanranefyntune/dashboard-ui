import {SlArrowRight} from "react-icons/sl";
import PropTypes from "prop-types"

const Member = ({name, designation, userpic}) => {
  return (
    <div className="flex items-center gap-2 w-30 bg-[#EFF3F4] rounded-md justify-between p-1">
      <div className="flex gap-2 items-center">
      <img src={userpic} alt="" className='w-6 h-6 rounded-full object-cover' />
      <div>
        <p className='text-[12px] font-bold'>{name}</p>
        <p className='text-[8px]'>{designation}</p>
      </div>
      </div>
      <div className='mr-2'>
      <SlArrowRight className='w-3 text-gray-500 ml-7'/>
      </div>
      
    </div>
  )
}

export default Member;

Member.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    userpic: PropTypes.string.isRequired,
}