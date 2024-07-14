import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="container mx-auto">
      <div className="wrapper flex justify-center items-center min-h-dvh">
        <div className="sm:border dark:border-gray-600 p-12 rounded-2xl flex flex-col justify-center items-center w-[40%]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
