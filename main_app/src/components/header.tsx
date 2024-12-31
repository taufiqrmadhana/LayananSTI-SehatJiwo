// components/Header.js

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Portal from "./Portal"; // Pastikan path benar

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Inisialisasi state sebagai false

  const navigationLinks = [
    { href: "/", icon: "/assets/svg/home-svgrepo-com.svg", label: "Home" },
    { href: "/notif", icon: "/assets/svg/notification-bell-1394-svgrepo-com.svg", label: "Notifications" },
    { href: "/chat", icon: "/assets/svg/chat-svgrepo-com.svg", label: "Chat" },
    { href: "/calendar", icon: "/assets/svg/calendar-days-svgrepo-com.svg", label: "Calendar" },
    { href: "/report", icon: "/assets/svg/report-linechart-svgrepo-com.svg", label: "Report" },
    { href: "/community", icon: "/assets/svg/community-group-leader-svgrepo-com.svg", label: "Community" },
  ];

  return (
    <>
      {/* Sidebar untuk Desktop */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-[#0B1214] z-50">
        <nav className="flex flex-col justify-between h-full py-6 px-4">
          {/* Bagian Profil */}
          <div className="flex items-center space-x-3 mb-8">
            <img
              src="/assets/chrisbrown.jpeg"
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover border border-[#ADBC9F]"
            />
            <div>
              <p className="text-sm font-medium text-[#FBFADA]">Chris Brown</p>
              <p className="text-xs text-[#ADBC9F]">Psychiatrist</p>
            </div>
          </div>

          {/* Navigasi Link */}
          <div className="flex flex-col space-y-1">
            {navigationLinks.map(({ href, icon, label }) => (
              <Link key={href} href={href}>
                <div
                  className={`relative flex items-center space-x-4 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                    pathname === href
                      ? "bg-[#1C2B2D] text-[#FBFADA]"
                      : "hover:bg-[#1C2B2D] text-[#ADBC9F]"
                  }`}
                >
                  {pathname === href && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#ADBC9F] rounded-r"></span>
                  )}
                  <img
                    src={icon}
                    alt={label}
                    className={`h-6 w-6 filter invert ${
                      pathname === href ? "brightness-200" : "brightness-75"
                    } transition-all duration-200`}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Logo di Bawah */}
          <div className="flex justify-center items-center mt-6">
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="w-28 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </nav>
      </div>

      {/* Navbar untuk Mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#0B1214] flex items-center justify-between px-4 py-3 z-50">
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-24 h-auto object-contain"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <FiX size={24} color="#FBFADA" /> : <FiMenu size={24} color="#FBFADA" />}
        </button>
      </div>

      {/* Overlay dan Sidebar Mobile menggunakan Portal */}
      {isOpen && (
        <Portal>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-60"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar Mobile */}
          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-[#0B1214] z-70 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col justify-between`}
          >
            {/* Header Sidebar dengan Tombol Close */}
            <div className="flex items-center justify-between py-4 px-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/chrisbrown.jpeg"
                  alt="Profile"
                  className="h-12 w-12 rounded-full object-cover border border-[#ADBC9F]"
                />
                <div>
                  <p className="text-sm font-medium text-[#FBFADA]">Chris Brown</p>
                  <p className="text-xs text-[#ADBC9F]">Psychiatrist</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <FiX size={24} color="#FBFADA" />
              </button>
            </div>

            {/* Navigasi Link */}
            <nav className="flex flex-col space-y-1 px-4">
              {navigationLinks.map(({ href, icon, label }) => (
                <Link key={href} href={href}>
                  <div
                    className={`relative flex items-center space-x-4 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                      pathname === href
                        ? "bg-[#1C2B2D] text-[#FBFADA]"
                        : "hover:bg-[#1C2B2D] text-[#ADBC9F]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {pathname === href && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-[#ADBC9F] rounded-r"></span>
                    )}
                    <img
                      src={icon}
                      alt={label}
                      className={`h-6 w-6 filter invert ${
                        pathname === href ? "brightness-200" : "brightness-75"
                      } transition-all duration-200`}
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Logo di Bawah */}
            <div className="flex justify-center items-center mt-6 px-4">
              <Link href="/">
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="w-24 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Header;
