import AuthFooter from "@/components/partials/AuthFooter";
import React from "react";

const Login = () => {
  return (
    <main className="container mx-auto">
      <div className="wrapper flex justify-center items-center h-screen">
        <div className="card-register border rounded-2xl w-full xl:w-[80%] h-[90%] bg-[#1e2426] relative">
          <div className="left-content text-white w-[50%] px-6 h-full flex items-center justify-center font-bold text-center text-3xl">
            BAGUSNYA BUAT APA DISINI WOI
          </div>
          <div className="right-content bg-white rounded-2xl p-6 w-full lg:w-1/2 h-full absolute right-0 top-0">
            <div className="h-full w-full flex flex-col justify-center items-center relative">
              <div className="content px-10 md:px-16 w-full">
                <div className="head mb-8 flex flex-col gap-2">
                  <h1 className="text-3xl font-bold">Welcome back !</h1>
                  <h5 className="text-sm text-gray-600">
                    Enter to get unlimited access to data & information
                  </h5>
                </div>
                <div className="flex flex-col inputs gap-3">
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
                    <div className="flex justify-end mt-2">
                      <a
                        href="./forgot-password.html"
                        className="font-bold text-primary hover:underline text-sm"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <button
                    className="w-full px-4 py-2 border rounded-lg bg-primary text-white hover:bg-primary-hover"
                    onclick="window.location = '../index.html'"
                  >
                    Submit
                  </button>
                </div>
                <div className="mt-7 text-center text-sm">
                  <span>
                    Don't have an account?{" "}
                    <a
                      className="font-bold text-primary hover:underline"
                      href="./register.html"
                    >
                      Register here
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

export default Login;
