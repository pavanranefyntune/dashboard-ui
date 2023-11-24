import  { useState } from 'react';
import {createMembers} from "../Api/Crud"
import { AiOutlineClose } from 'react-icons/ai';
import { useMutation, useQueryClient} from '@tanstack/react-query';


// eslint-disable-next-line react/prop-types
const MemberModal = ({closeModal}) => {
  const queryClient = useQueryClient();
  const createMemberMutation = useMutation({
    mutationFn : createMembers,
    onSuccess: () => {
       queryClient.invalidateQueries({queryKey: ["myMembers"]});
    }
  })

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [genderError, setGenderError] = useState('');
const [statusError, setStatusError] = useState('');

  const value = {
    "name" : name,
    "email" : email,
    "gender" : gender,
    "status" : status,

  }

  const handleSubmit = (e) => {   
    e.preventDefault();
   setNameError('');
   setEmailError('');
   setGenderError('');
   setStatusError('');

 if (!name.trim()) {
    setNameError('Member Name is required');
    return;
  }

  if (!email.trim()) {
    setEmailError('Member Email is required');
    return;
  }

  if (!gender.trim()) {
    setGenderError('Member Gender is required');
    return;
  }

  if (!status.trim()) {
    setStatusError('Member Status is required');
    return;
  }
    closeModal();
    createMemberMutation.mutate(value) 
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Member Email'
                className="mt-1 p-2 w-full border rounded-md"
              />
                {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male" className="ml-1">Male</label>

                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  
                  className="ml-4"
                />
                <label htmlFor="female" className="ml-1">Female</label>
              </div>
              {genderError && <p className="text-red-500">{genderError}</p>}
            </div>

            <div>
              <label>Status:</label>
              <div>
                <input
                  type="radio"
                  value="active"
                  checked={status === 'active'}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="active" className="ml-1">Active</label>

                <input
                  type="radio"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={(e) => setStatus(e.target.value)}
                  className="ml-4"
                />
                <label htmlFor="inactive" className="ml-1">Inactive</label>
              </div>
              {statusError && <p className="text-red-500">{statusError}</p>}
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