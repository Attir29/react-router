import React from "react";
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, "username is required")
    .min(5, "username must be at least 5 characters long"),
  password: z
    .string()
    .min(1, "password is required")
    .min(6, "password must be at least 6 characters long"),
});
export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
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
            className="mt-1 w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">
              {errors.username.message}
            </p>
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
            className="mt-1 w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md"
        >
          Login
        </button>

        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </form>
    </section>
  );
}
