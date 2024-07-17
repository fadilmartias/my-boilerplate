"use client";
import Input from "@/components/forms/Input";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  
  const handleSubmit = () => {
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
          "Password must be at least 8 characters long and contain at least one letter and one number"
        ),
      confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
  });

  const handleForm = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div className="content w-full">
      <div className="head mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <h5 className="text-sm text-gray-600 dark:text-primary-dark">
          Start your journey
        </h5>
      </div>
      <div className="flex flex-col inputs gap-6">
        <Input
          variant={"floating"}
          type="text"
          name="name"
          id="name"
          label={"Name"}
          onChange={handleForm}
          error={formik.errors.name}
          required
        />
        <Input
          variant={"floating"}
          type="email"
          name="email"
          label={"Email"}
          onChange={handleForm}
          error={formik.errors.email}
          id="email"
          required
        />
        <div>
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
          {/* <small className="text-gray-400 text-xs">
          Password must be at least 8 characters long and contain at least one letter and one number
          </small> */}
        </div>
        <Input
            variant={"floating"}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label={"Confirm Password"}
            onChange={handleForm}
            error={formik.errors.confirmPassword}
            required
          />
      </div>
      <button className="btn btn-primary btn-block mt-5">Submit</button>
      <div className="mt-7 text-center text-sm">
        <span>
          Already have an account?{" "}
          <Link className="font-bold hover:underline" href="/login">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
