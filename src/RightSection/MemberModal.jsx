import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../Redux/membersSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
const MemberModal = ({closeModal}) => {
  const [imgUrl, setImgUrl] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

const [imgUrlError, setImgUrlError] = useState('');
const [nameError, setNameError] = useState('');
const [designationError, setDesignationError] = useState('');


const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }
};



  const value = {
    id:new Date().getTime(),
    "userpic" : imgUrl,
    "name" : name,
    "designation" : designation,
  }
  const dispatch = useDispatch()

  const handleSubmit = (e) => {

    
    e.preventDefault();

   setImgUrlError('');
   setNameError('');
   setDesignationError('');


if (!imgUrl.trim()) {
    setImgUrlError('Choose Image');
    return;
  }

 if (!name.trim()) {
    setNameError('Member Name is required');
    return;
  }

  if (!designation.trim()) {
    setDesignationError('Member Designation is required');
    return;
  }


    dispatch(addMember(value))
    closeModal();
    console.log('Member Added:', { imgUrl, name, designation});
    
  };

  return (
    <div className={"fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90"}>
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="bg-white  rounded shadow-lg p-4">
            <div className='flex justify-between p-4'>
            <p className='text-center font-bold text-md mt-[-10px]'>Add Team Member</p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
            onClick={closeModal}
            >
              <AiOutlineClose/>
            </button>
            </div>
          <div className="flex justify-end">

          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
            <div className='flex flex-col items-center'>
            <FaUserAlt className='w-[5rem] h-[5rem]'/>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 p-2 w-[10rem] border rounded-md"
                
              />
                {imgUrlError && <p className="text-red-500">{imgUrlError}</p>}
            </div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Member Name'
                className="mt-1 p-2 w-full border rounded-md"
              />
                {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
            <div>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder='Enter Member Designation'
                className="mt-1 p-2 w-full border rounded-md"
              />
                {designationError && <p className="text-red-500">{designationError}</p>}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );             
};

export default MemberModal;