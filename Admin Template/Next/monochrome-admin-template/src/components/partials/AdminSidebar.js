import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="sidebar active">
      <div className="wrapper flex flex-col gap-4">
        <div className="group-items flex flex-col gap-4">
          <div className="title font-bold text-gray-500 cursor-default">Menu</div>
          <ul className="items flex flex-col gap-2">
            <li className="item">
              <span
                className="icon-[iconamoon--home]"
              ></span>
              <a className="block w-full" href="#">
                Dashboard
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[lets-icons--table]"
              ></span>
              <a className="block w-full" href="./tables/table.html">
                Table
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="group-items flex flex-col gap-4">
          <div className="title font-bold text-gray-500 cursor-default">Auth</div>
          <ul className="items flex flex-col gap-2">
            <li className="item">
              <span
                className="icon-[mdi--register]"
              ></span>
              <a className="block w-full" href="../pages/auth/register.html">
                Register
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[material-symbols--login]"
              ></span>
              <a className="block w-full" href="../pages/auth/login.html">
                Login
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[mdi--forgot-password]"
              ></span>
              <a className="block w-full" href="../pages/auth/forgot-password.html">
                Forgot Password
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[mdi--password]"
              ></span>
              <a className="block w-full" href="../pages/auth/reset-password.html">
                Reset Password
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="group-items flex flex-col gap-4">
          <div className="title font-bold text-gray-500 cursor-default">Pages</div>
          <ul className="items flex flex-col gap-2">
            <li className="item active">
              <span
                className="icon-[uil--file-blank]"
              ></span>
              <a className="block w-full" href="index.html">
                Black Page
              </a>
            </li>
            <li className="item-collapse">
              <div
                className="collapse-sidebar relative hover:bg-hover dark:hover:bg-hover-dark item px-4 py-2 rounded-2xl cursor-pointer flex items-center justify-between gap-3"
                data-toggle="collapse"
                data-target="#error_collapse_item"
              >
                <div className="left-items flex items-center justify-between gap-3">
                  <span
                    className="icon-[tabler--error-404]"

                  ></span>
                  <a className="block w-full" href="#">
                    Error Pages
                  </a>
                </div>
                <div className="right-items flex items-center">
                  <span
                    className="icon-[iconoir--nav-arrow-right]"

                  ></span>
                </div>
              </div>
              <ul className="collapse-items ml-5" id="error_collapse_item">
                <li>
                  <a
                    href="./error/404.html"
                    className="block px-4 py-2 rounded-2xl hover:bg-hover dark:hover:bg-hover-dark"
                  >
                    404
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-2xl hover:bg-hover dark:hover:bg-hover-dark"
                  >
                    403
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-2xl hover:bg-hover dark:hover:bg-hover-dark"
                  >
                    500
                  </a>
                </li>
              </ul>
            </li>

            <li className="item">
              <span
                className="icon-[mdi--success]"
              ></span>
              <a className="block w-full" href="#">
                Success Page
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[ic--baseline-sms-failed]"
              ></span>
              <a className="block w-full" href="#">
                Error Page
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="group-items flex flex-col gap-4">
          <div className="title font-bold text-gray-500 cursor-default">
            Components
          </div>
          <ul className="items flex flex-col gap-2">
            <li className="item">
              <span
                className="icon-[uil--file-blank]"
              ></span>
              <a className="block w-full" href="./components/alert.html">
                Alert
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[uil--file-blank]"
              ></span>
              <a className="block w-full" href="./components/button.html">
                Button
              </a>
            </li>
            <li id="loading-screen" className="item">
              <span
                className="icon-[mdi--success]"
              ></span>
              <a className="block w-full">
                Loading Screen
              </a>
            </li>
            <li className="item" data-toggle="modal" data-target="#modal-example">
              <span
                className="icon-[ic--baseline-sms-failed]"
              ></span>
              <a className="block w-full" href="#">
                Modal
              </a>
            </li>
            <li className="item">
              <span
                className="icon-[ic--baseline-sms-failed]"
              ></span>
              <a className="block w-full" href="./components/spinner.html">
                Spinner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
