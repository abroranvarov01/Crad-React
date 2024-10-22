import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-[20px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <input
        className="w-[400px] p-[10px] rounded-[20px] border-[2px] border-y-green-500"
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
        className="w-[400px] p-[10px] rounded-[20px] border-[2px] border-y-green-500"
        type="text"
        placeholder="username"
        {...register("username", { required: true })}
      />
      <button className="bg-blue-500 p-[10px] rounded-[10%] text-white w-[150px] mb-[15px] block">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
