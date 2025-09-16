import React from "react";
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name must be at most 100 characters long"),
  username: z.string().min(5, "Username must be at least 5 characters long").max(100, "Username must be at most 100 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long").max(100, "Password must be at most 100 characters long"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-blue-950">
      <NavBar />
      <form
        action=""
        className="bg-gray-300 p-10 w-[520px] rounded-3xl"
        onSubmit={handleSubmit()}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            username
          </label>
          <input
            type="text"
            {...register("username")}
            id="username"
            name="username"
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md"
        >
          Login
        </button>

        <p className="mt-4 text-sm">
          i do have an account{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            login here
          </span>
        </p>
      </form>
    </section>
  );
}
