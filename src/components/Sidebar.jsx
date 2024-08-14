"use client";
import { useEffect, useRef, useState } from "react";
import { FaHome, FaClipboardList, FaUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div>
      <div className="lg:hidden p-4 absolute top-0 right-0">
        <HiMenu onClick={() => setIsOpen(!isOpen)} className="text-3xl" />
      </div>
      <aside
        ref={sidebarRef}
        className={`w-15 fixed lg:relative z-10 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:block h-full right-0`}
      >
        <div className="flex items-center justify-center h-16">
          <h1 className="text-2xl font-bold">ZuAI</h1>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a
            href="#"
            className="flex items-center p-2 rounded-lg hover:bg-indigo-500"
          >
            <FaHome className="mr-3" /> Home
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded-lg hover:bg-indigo-500"
          >
            <FaClipboardList className="mr-3" /> Coursework
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded-lg hover:bg-indigo-500"
          >
            <FaUser className="mr-3" /> Profile
          </a>
        </nav>
      </aside>
    </div>
  );
}
