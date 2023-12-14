/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit, formFields, defaultValues }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-2">
        {formFields.map((field, index) =>
          field.name === "status" || field.name === "gender" ? (
            <div
              key={index}
              className="text-center flex gap-1 items-center justify-center"
            >
              <label>{field.label}</label>
              <select {...register(field.name)}>
                {field.options.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div
              key={index}
              className="flex items-center flex-col justify-center"
            >
              <input
                type={field.type}
                {...register(field.name, {
                  required: `${field.name} is required`,
                  pattern: field.pattern,
                })}
                placeholder={field.placeholder}
                className="text-center border p-1"
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
