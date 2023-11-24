import {SlArrowRight} from "react-icons/sl";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const Member = ({name, email, gender, id, status, handleDelete}) => {


  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <div className={`flex items-center gap-2 w-30 ${darkMode ? "bg-[#23272F]" : "bg-[#EFF3F4]"} rounded-md justify-between p-1`}>
      <div className="flex gap-2 items-center">
      <div>
        <p className={`text-[12px] font-bold ${darkMode && "text-white"}`}>{name}</p>
        <p className={`text-[8px] ${darkMode && "text-gray-400"}`}>{email}</p>
        <p className={`text-[8px] ${darkMode && "text-gray-400"}`}>{gender}</p>
        <p className={`text-[8px] ${darkMode && "text-gray-400"}`}>{status}</p>
      </div>
      </div>
      <div className='mr-2 flex gap-'>
        <div className="flex gap-2">
        <div>
      <FaUserEdit className="w-5 h-6"/>
      </div>
      <div className="cursor-pointer" 
      onClick={()=> handleDelete(id)}>
      < MdDeleteForever className="w-8 h-6"/>
      </div>
      </div>
      <Link to={`/userDetails/${id}`}>
      <SlArrowRight className='w-3 text-gray-500 ml-7'
      />
       </Link>
      </div>
      
    </div>
  )
}

export default Member;