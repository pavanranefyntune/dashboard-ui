import {SlArrowRight} from "react-icons/sl";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const Member = ({name, email, gender, id, status}) => {

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
      <div className='mr-2'>
       

      <Link to={`/userDetails/${id}`}>
      <SlArrowRight className='w-3 text-gray-500 ml-7'
      />
       </Link>
      </div>
      
    </div>
  )
}

export default Member;