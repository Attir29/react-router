import React from "react";
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Fullname must be at least 3 characters long")
      .max(50, "Fullname must be at most 50 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    passwordConfirmation: z
      .string()
      .min(1, "Password confirmation is required"),
    age: z.preprocess(
      (val) => (val ? Number(val) : undefined),
      z
        .number({ invalid_type_error: "Age must be a number" })
        .int("Age must be an integer")
        .min(18, "You must be at least 18 years old")
        .max(60, "Age must be less than or equal to 60")
    ),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
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

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-blue-950">
      <NavBar />
      <form
        className="bg-gray-300 p-10 w-[520px] rounded-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fullname
          </label>
          <input
            type="text"
            {...register("fullname")}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.fullname && (
            <p className="text-red-600 text-sm mt-1">
              {errors.fullname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("passwordConfirmation")}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.passwordConfirmation && (
            <p className="text-red-600 text-sm mt-1">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register("age")}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
          />
          {errors.age && (
            <p className="text-red-600 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md"
        >
          Register
        </button>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login here
          </span>
        </p>
      </form>
    </section>
  );
}
