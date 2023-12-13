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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2"
      >
        {formFields.map((field, index) =>
          field.type === "radio" ? (
            <div key={index}>
              <label>{field.label}</label>
              {field?.options?.map((option, index) => (
                <div key={index}>
                  <input
                    type={field.type}
                    {...register(field.name)}
                    value={option.value}
                  />
                  <label>{option.label}</label>
                </div>
              ))}
              {/* {errors[field.name] && (
                <p className="text-center text-red-500">
                  {errors[field.name].message}
                </p>
              )} */}
            </div>
          ) : (
            <div key={index}>
              <input
                type={field.type}
                {...register(field.name)}
                placeholder={field.placeholder}
              />
              {/* {errors[field.name] && (
                <p className="text-center text-red-500">
                  {errors[field.name].message}
                </p>
              )} */}
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
