import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const AddUserModal = ({
  // eslint-disable-next-line react/prop-types
  closeModal,
  // eslint-disable-next-line react/prop-types
  usersData,
  // eslint-disable-next-line react/prop-types
  setUsersData,
}) => {
  const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    gender: yup
      .string()
      .oneOf(["male", "female"])
      .required("Gender is required"),
    username: yup.string().required("Username is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line react/prop-types
    const usernamePresent = usersData.some(
      (user) => user.username.toLowerCase() === data.username.toLowerCase()
    );
    if (usernamePresent) {
      toast.error("User Already Present");
      closeModal();
    } else {
      setUsersData([data, ...usersData]);
      toast.success("User Added Successfully");
      closeModal();
    }
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
            <p className="text-center font-bold text-md mt-[-10px]">Add User</p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2"
          >
            <div>
              <input
                type="text"
                {...register("first_name")}
                placeholder="Enter First Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.first_name && (
                <p className="text-center text-red-500">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter Email"
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.email && (
                <p className="text-center text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label>Gender:</label>
              <div>
                <input type="radio" {...register("gender")} value="male" />
                <label htmlFor="male" className="ml-1">
                  Male
                </label>

                <input
                  type="radio"
                  {...register("gender")}
                  value="female"
                  className="ml-4"
                />
                <label htmlFor="female" className="ml-1">
                  Female
                </label>
                \
                
              </div>
              {errors.gender && (
                <p className="text-center text-red-500">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("username")}
                placeholder="Enter Username"
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.username && (
                <p className="text-center text-red-500">
                  {errors.username.message}
                </p>
              )}
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

export default AddUserModal;
