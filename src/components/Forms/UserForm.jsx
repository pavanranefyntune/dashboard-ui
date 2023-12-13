/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UserForm = ({
  schema,
  onSubmit,
  formFields,
  first_name,
  email,
  gender,
  username,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: first_name,
      email: email,
      gender: gender,
      username: username,
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2"
      >
        {formFields.map((field, index) =>
          field.type === "radio" ? (
            <div key={index}>
              <label>Gender:</label>
              <div>
                <input
                  type={field.type}
                  {...register(field.name)}
                  value="Male"
                />
                <label htmlFor="Male" className="ml-1">
                  Male
                </label>

                <input
                  type={field.type}
                  {...register(field.name)}
                  value="Female"
                  className="ml-4"
                />
                <label htmlFor="Female" className="ml-1">
                  Female
                </label>
              </div>
              {errors[field.name] && (
                <p className="text-center text-red-500">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ) : (
            <div key={index}>
              <input
                type={field.type}
                {...register(field.name)}
                placeholder={field.placeholder}
              />
              {errors[field.name] && (
                <p className="text-center text-red-500">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          )
        )}
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
  );
};

export default UserForm;
