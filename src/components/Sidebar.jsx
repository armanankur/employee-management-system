import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";

import {
  LayoutGridIcon,
  MenuIcon,
  UserIcon,
  XIcon,
  Calendar1Icon,
  FileTextIcon,
  DollarSignIcon,
  SettingsIcon,
  ChevronRightIcon,
  LogOutIcon,
} from "lucide-react";
const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  //close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  const role = "" || "Employee"; // Replace with the actual role of the user
  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutGridIcon,
    },
    role === "ADMIN"
      ? {
        name: "Employees",
        href: "/employees",
        icon: UserIcon,
      }
      : {
        name: "Attendance",
        href: "/attendance",
        icon: Calendar1Icon,
      },
    {
      name: "Leave",
      href: "/leave",
      icon: FileTextIcon,
    },
    {
      name: "Payslips",
      href: "/payslips",
      icon: DollarSignIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
  ];

  const handleLogout = () => {
    window.location.href = "/login"
  }

  const sidebarContent = (
    <>
      {/* Brand Header */}

      <div className="px-5 pt-6 pb-4  border-b border-white/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white size-7" />
            <div>
              <p className="font-semibold text-[13px] text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Management System
              </p>
            </div>
          </div>

          {/* close Menu on Mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <XIcon
              size={20}
              className=" lg:hidden text-slate-400 hover:text-white p-1"
            />
          </button>
        </div>
      </div>

      {/* User profile card */}
      {userName && (
        <div className="mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full  bg-linear-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white text-md font-semibold ">
              <span className="text-md font-bold text-slate-50">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-md font-medium text-slate-200 truncate">
                {userName}
              </p>
              <p className="text-xs font-medium text-slate-400 truncate">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Navigation label */}

      <div className="px-5 pt-5 pb-2 ">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
          Navigation
        </p>
      </div>
      {/* Navigation list */}

      <div className=" flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-all duration-150 relative ${isActive ? "bg-indigo-500/12 text-indigo-300" : "text-slate-300 hover:text-white hover:bg-white/4"}`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 rounded-r-full bg-indigo-500"></div>
              )}
              <item.icon
                className={`w-4.25 h-4.25 shrink-0 ${isActive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"}`}
              />
              <span className=" flex-1">{item.name}</span>
              {isActive && (
                <ChevronRightIcon className="w-3.5 h-3.5 text-indigo-500/50" />
              )}
            </Link>
          );
        })}
      </div>
      {/* Logout */}
      <div className=" p-3 border-t border-white/8">
        <button className="flex items-center w-full gap-3 px-3 py-2 rounded-md text-[13px]
         font-medium text-slate-300 hover:text-rose-700 hover:bg-rose-300/10 transition-all duration-150 cursor-pointer" onClick={handleLogout}>
          <LogOutIcon className='w-4.25 h-4.25' />
          <span>Log out</span>
        </button>
      </div>
    </>
  );
  return (
    <>
      {/* Mobile hamburger menu */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-400 text-white rounded-lg shadow-lg border border-white/10"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon size={20} />
      </button>

      {/* Mobile overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* sidebar - Desktop */}

      {/* <aside className="hidden lg:flex flex-col w-64 h-screen bg-linear-to-b from bg-slate-900 via-slate-900 to-slate-950  text-white fixed top-0 left-0 z-50 border-r border-white/10"> */}
      {/* <aside className="hidden lg:flex flex-col w-64 h-screen shrink-0 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-white/10">
        {sidebarContent}
      </aside> */}
      <aside className="hidden lg:flex flex-col w-64 h-screen shrink-0 
   bg-linear-to-br from-slate-950 via-purple-950 to-fuchsia-900 border-r border-white/10 ">
        {sidebarContent}
      </aside>
      {/* sidebar - Mobile */}

      <aside
        className={` lg:hidden fixed inset-y-0 left-0 w-64 bg-linear-to-br from-slate-950 via-purple-950 to-fuchsia-900  text-white z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
