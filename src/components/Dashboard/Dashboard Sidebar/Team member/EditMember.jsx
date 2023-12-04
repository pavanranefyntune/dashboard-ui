import  { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useMutation, useQueryClient} from '@tanstack/react-query';
import useUpdateMember from './custom hooks/useUpdateMember';

// eslint-disable-next-line react/prop-types
const EditMember = ({pass, closeEditModal}) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, email, gender, status } = pass;

  const queryClient = useQueryClient();

  const {updateMember} = useUpdateMember();
  const updateMemberMutation = useMutation({
    mutationFn : updateMember,
    onSuccess: () => {
       queryClient.invalidateQueries({queryKey: ["myMembers"]});
    }
  })

  const [value, setValue] = useState({
    id : id,
    name: name,
    email : email,
    gender : gender,
    status : status,
  });

  const handleSubmit = (e) => {   
    e.preventDefault();
 
  closeEditModal();
  updateMemberMutation.mutate(value) 
  };

  return (
    <div className={"fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90"}>
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="bg-white  rounded shadow-lg p-4">
            <div className='flex justify-between p-4'>
            <p className='text-center font-bold text-md mt-[-10px]'>Edit Team Member</p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
            onClick={closeEditModal}
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
                value={value.name}
                onChange={(e) => setValue({...value, name: e.target.value})}
                placeholder='Enter Member Name'
                className="mt-1 p-2 w-full border rounded-md"
              />
              
            </div>
            <div>
              <input
                type="text"
                value={value.email}
                onChange={(e) => setValue({...value, email: e.target.value})}
                placeholder='Enter Member Email'
                className="mt-1 p-2 w-full border rounded-md"
              />
            
            </div>
            <div>
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  value="male"
                  checked={value.gender === 'male'}
                  onChange={(e) => setValue({...value, gender: e.target.value})}
                />
                <label htmlFor="male" className="ml-1">Male</label>

                <input
                  type="radio"
                  value="female"
                  checked={value.gender === 'female'}
                  onChange={(e) => setValue({...value, gender: e.target.value})}
                  
                  className="ml-4"
                />
                <label htmlFor="female" className="ml-1">Female</label>
              </div>
            
            </div>

            <div>
              <label>Status:</label>
              <div>
                <input
                  type="radio"
                  value="active"
                  checked={value.status === 'active'}
                  onChange={(e) => setValue({...value, status: e.target.value})}
                />
                <label htmlFor="active" className="ml-1">Active</label>

                <input
                  type="radio"
                  value="inactive"
                  checked={value.status === 'inactive'}
                  onChange={(e) => setValue({...value, status: e.target.value})}
                  className="ml-4"
                />
                <label htmlFor="inactive" className="ml-1">Inactive</label>
              </div>
           
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

export default EditMember;