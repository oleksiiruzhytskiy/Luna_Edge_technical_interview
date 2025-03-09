import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export const Form = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
      <input
        {...register("firstName", {
          required: "First name is required",
          minLength: { value: 2, message: "Minimum 2 characters" },
          maxLength: { value: 12, message: "Maximum 12 characters" },
          pattern: { value: /^[A-Za-z]+$/, message: "Only letters are allowed" },
        })}
        className="border p-2"
        placeholder="First Name"
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

      <input
        {...register("lastName", {
          required: "Last name is required",
          minLength: { value: 2, message: "Minimum 2 characters" },
          maxLength: { value: 12, message: "Maximum 12 characters" },
          pattern: { value: /^[A-Za-z]+$/, message: "Only letters are allowed" },
        })}
        className="border p-2"
        placeholder="Last Name"
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </form>
  );
};