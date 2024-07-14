import AuthFooter from "@/components/partials/AuthFooter";
import React from "react";

const Register = () => {
  return (
    <main className="container mx-auto">
      <div className="wrapper flex justify-center items-center h-screen">
        <div className="card-register sm:border sm:rounded-2xl w-full xl:w-[80%] h-[90%] lg:bg-[#1e2426] relative">
          <div className="left-content text-white w-[50%] flex px-6 h-full items-center justify-center font-bold text-center text-3xl">
            BAGUSNYA BUAT APA DISINI WOI
          </div>
          <div className="right-content bg-white rounded-2xl p-6 w-full lg:w-1/2 h-full absolute right-0 top-0">
            <div className="h-full w-full flex flex-col justify-center items-center relative">
              <div className="content px-10 md:px-16 w-full">
                <div className="head mb-8 flex flex-col gap-2">
                  <h1 className="text-3xl font-bold">Create an account</h1>
                  <h5 className="text-sm text-gray-600">
                    Start your 30-day free trial
                  </h5>
                </div>
                <div className="flex flex-col inputs gap-3">
                  <div className="">
                    <label className="" htmlFor="">
                      Name<sup className="-top-1 text-red-500 left-[2px]">*</sup>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full border rounded-lg py-2 px-4 focus:border-primary focus:outline-0"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Email<sup className="-top-1 text-red-500 left-[2px]">*</sup>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full border rounded-lg py-2 px-4 focus:border-primary focus:outline-0"
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                  <div className="">
                    <label className="" htmlFor="">
                      Password
                      <sup className="-top-1 text-red-500 left-[2px]">*</sup>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="w-full border rounded-lg py-2 px-4 focus:border-primary focus:outline-0"
                      placeholder="********"
                      required
                    />
                    <small className="text-gray-400 text-sm">
                      Must be at least 8 characters
                    </small>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <button className="w-full px-4 py-2 border rounded-lg bg-primary text-white hover:bg-primary-hover">
                    Submit
                  </button>
                </div>
                <div className="mt-7 text-center text-sm">
                  <span>
                    Already have an account?{" "}
                    <a
                      className="font-bold text-primary hover:underline"
                      href="./login.html"
                    >
                      Log in
                    </a>
                  </span>
                </div>
              </div>
             <AuthFooter/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
