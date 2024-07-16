"use client";
import { ArrowDown, ArrowDown2, Home2, TableDocument } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  console.log(pathname);
  const sidebarMenu = [
    {
      header: "Menu",
      divider: true,
      submenu: [
        {
          title: "Dashboard",
          link: "/admin/dashboard",
          icon: <Home2 variant={"Bold"} size={18} />,
        },
        {
          title: "Table",
          link: "/",
          icon: <TableDocument variant={"Bold"} size={18} />,
          submenu: [
            {
              title: "Datatable",
              link: "#",
            },
          ],
        },
      ],
    },
  ];
  return (
    <aside className="sidebar active">
      <div className="wrapper flex flex-col gap-4">
        {sidebarMenu.map((item, idx) => (
          <div className="group-items flex flex-col gap-2" key={idx}>
            <div className="title text-sm font-bold text-gray-400 cursor-default">
              {item.header}
            </div>
            {item.submenu?.map((item, idx) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.idx}
                    className="item w-full !block relative group"
                  >
                    <div
                      className={`flex items-center w-full justify-between rounded group-hover:font-bold`}
                      onClick={() => handleOpen(item.idx)}
                    >
                      <div
                        className={`${
                          pathname.includes(`${item.title.toLowerCase()}`)
                            ? "font-bold"
                            : ""
                        } flex gap-3`}
                      >
                        {item.icon}
                        {item.title}
                      </div>
                      <div>
                        <ArrowDown2
                          className={`mx-auto h-4 w-4 transition-transform ${
                            open === item.idx ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        open == item.idx
                          ? "opacity-100 max-h-[400px] mt-2 py-2"
                          : "max-h-0 opacity-0"
                      } bg-white border border-gray-300 overflow-hidden rounded-lg transition-all duration-300 w-full`}
                    >
                      {item.submenu.map((data, idx) => (
                        <Link
                          href={`${data.link}`}
                          key={data.idx}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          {data.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={idx}
                    className={`item block w-full ${
                      pathname.includes(item.link.toLowerCase()) && "active"
                    }`}
                    href={item.link}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                );
              }
            })}
            {item.divider && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AdminSidebar;
