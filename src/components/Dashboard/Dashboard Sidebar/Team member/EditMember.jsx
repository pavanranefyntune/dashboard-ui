import { AiOutlineClose } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUpdateMember from "./custom hooks/useUpdateMember";
import UserForm from "../../../Forms/UserForm";
import formFields from "./forFields.constant";

// eslint-disable-next-line react/prop-types
const EditMember = ({ pass, closeEditModal }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, email, gender, status } = pass;

  const queryClient = useQueryClient();

  const { updateMember } = useUpdateMember();
  const updateMemberMutation = useMutation({
    mutationFn: updateMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myMembers"] });
    },
  });

  const handleSubmit = (value) => {
    closeEditModal();
    updateMemberMutation.mutate(value);
  };

  const defaultValues = {
    name: name || "",
    email: email || "",
    gender: gender || "",
    status: status || "",
    id: id,
  };

  return (
    <div
      className={
        "fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90"
      }
    >
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="bg-white  rounded shadow-lg p-4">
          <div className="flex justify-between p-4">
            <p className="text-center font-bold text-md mt-[-10px]">
              Edit Team Member
            </p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={closeEditModal}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-end"></div>
          <UserForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            formFields={formFields}
          />
        </div>
      </div>
    </div>
  );
};

export default EditMember;
