import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 text-white py-4 px-6 md:hidden">
        <span>Logo</span>
        <button className="text-white" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`md:flex md:flex-col md:items-center bg-gray-900 text-white h-screen w-full md:w-64 fixed top-0 left-0 z-50 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/dashboard">
          <div className="p-4 hover:bg-gray-700">Dashboard</div>
        </Link>
        <Link href="/profile">
          <div className="p-4 hover:bg-gray-700">Profile</div>
        </Link>
        <Link href="/analytics">
          <div className="p-4 hover:bg-gray-700">Analytics</div>
        </Link>
        <Link href="/settings">
          <div className="p-4 hover:bg-gray-700">Settings</div>
        </Link>
        <Link href="/admin">
          <div className="p-4 hover:bg-gray-700">Admin</div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
