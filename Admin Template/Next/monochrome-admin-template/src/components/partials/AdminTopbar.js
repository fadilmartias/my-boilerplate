import React from "react";

const AdminTopbar = () => {
  return (
    // TOPBAR
    <nav className="topbar active">
      <div className="wrapper w-full flex justify-between items-center h-full px-6 py-2">
        <div className="left-items">
          <div className="btn-close-topbar cursor-pointer">
            <span className="sidebar-icon icon-[solar--hamburger-menu-linear] w-[24px]"></span>
          </div>
        </div>
        <div className="right-items">
          <div className="user relative">
            <div
              className="user-info dropdown-toggle flex gap-3 cursor-pointer"
              data-toggle="dropdown"
              data-target="#dropdown_user_info"
            >
              <div className="info text-right">
                <div className="text-sm font-semibold">M. Fadil Martias</div>
                <div className="text-xs">Admin</div>
              </div>
              <div className="avatar w-11 h-11 rounded-full bg-primary"></div>
            </div>
            <div
              className="dropdown text-black dark:text-white bg-white dark:bg-gray-700 w-full mt-1 border rounded-xl shadow-lg top-full"
              id="dropdown_user_info"
            >
              <ul className="dropdown-menu flex flex-col rounded-xl">
                <li className="dropdown-item flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-hover dark:hover:bg-hover-dark hover:rounded-t-xl">
                  <span className="icon-[lets-icons--setting-alt-line] w-[16px] h-[16px]"></span>
                  <a className="block w-full" href="#">
                    Setting
                  </a>
                </li>
                <div className="divider"></div>
                <li className="dropdown-item flex cursor-pointer items-center gap-3 text-red-600 hover:bg-hover dark:hover:bg-hover-dark hover:rounded-b-xl px-4 py-2">
                  <span className="icon-[majesticons--logout-line] rotate-180 w-[16px] h-[16px]"></span>
                  <a className="block w-full" href="./auth/login.html">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // END TOPBAR
  );
};

export default AdminTopbar;
