"use client";
import Input from "@/components/forms/Input";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Head from "next/head";

const Login = () => {
  const handleSubmit = () => {
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required().matches(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/, "Password harus mengandung minimal satu huruf, satu angka, dan memiliki panjang minimal 8 karakter"),
    }),
  });

  const handleForm = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };
  return (
    <>
      <div className="content w-full">
      <div className="head mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <h5 className="text-sm text-gray-600 dark:text-primary-dark">
          Start your journey
        </h5>
      </div>
      <form action="" onSubmit={formik.handleSubmit} noValidate>
        <div className="flex flex-col inputs gap-6">
          <Input
            variant={"floating"}
            type="email"
            name="email"
            label={"Email"}
            id="email"
            onChange={handleForm}
            error={formik.errors.email}
            required
          />
          <Input
            variant={"floating"}
            type="password"
            name="password"
            id="password"
            label={"Password"}
            onChange={handleForm}
            error={formik.errors.password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-8">
          Submit
        </button>
      </form>
      <div className="mt-7 text-center text-sm">
        <span>
          Don't have an account?{" "}
          <Link
            className="font-bold text-primary dark:text-primary-dark hover:underline"
            href="/register"
          >
            Register here
          </Link>
        </span>
      </div>
    </div>
    </>
  );
};

export default Login;
