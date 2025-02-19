"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function SignupForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Account created successfully!");
      reset();
      setIsLoading(false);
    }, 2000);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-4 border rounded-md shadow-md max-w-md mx-auto"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Kiran Myadaram"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="kiran@example.com"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Sign up"}
      </button>
    </form>
  );
}
