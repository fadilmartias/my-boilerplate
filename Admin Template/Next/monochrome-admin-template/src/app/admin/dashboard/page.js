import React from "react";

export const metadata = {
  title: "Dasboard",
  description: 'Dashboard',
}

const Dashboard = () => {
  
  return (
    <>
      <div className="content-wrapper pt-16 transition-all">
        <div className="content p-6">
          <div className="header flex gap-8 items-end mb-6">
            <h1 className="title font-bold text-2xl pb-0 mb-0 align-text-bottom">
              Blank Page
            </h1>
            <div
              className="breadcrumb flex gap-1 text-xs align-text-bottom pb-[.25rem]"
              id="breadcrumb"
            >
              <span>Pages</span>
              <span>/</span>
              <span>Blank Page</span>
            </div>
          </div>
          <div className="content">tesbro</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
