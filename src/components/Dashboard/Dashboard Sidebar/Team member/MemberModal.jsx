import useAddMember from "./custom hooks/useAddMember";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UserForm from "../../../Forms/UserForm";
import * as yup from "yup";

// eslint-disable-next-line react/prop-types
const MemberModal = ({ closeModal }) => {
  const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    gender: yup
      .string()
      .oneOf(["male", "female"])
      .required("Gender is required"),
    status: yup
      .string()
      .oneOf(["active", "inactive"])
      .required("status is required"),
  });

  const { createMembers } = useAddMember();

  const queryClient = useQueryClient();
  const createMemberMutation = useMutation({
    mutationFn: createMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myMembers"] });
    },
  });

  const handleSubmit = (data) => {
    console.log("member created ", data);
    closeModal();
    createMemberMutation.mutate(data);
    console.log("member created");
  };

  const formFields = [
    { name: "name", type: "text", placeholder: "Enter First Name" },
    { name: "email", type: "email", placeholder: "Enter Email" },
    {
      name: "gender",
      type: "radio",
      label: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      name: "status",
      type: "radio",
      label: "Status",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  ];

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
              Add Team Member
            </p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-end"></div>
          <UserForm
            onSubmit={handleSubmit}
            formFields={formFields}
            schema={schema}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
