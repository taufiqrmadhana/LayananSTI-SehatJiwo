"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const colors = {
    sidebarBg: "#0B1214",
    hoverBg: "#1C2B2D",
    activeLine: "#ADBC9F",
    textDefault: "#FBFADA",
    textSecondary: "#ADBC9F",
  };

  return (
    <header
      className="fixed top-0 left-0 h-full w-64 z-50 transition-all duration-300"
      style={{ backgroundColor: colors.sidebarBg }}
    >
      <nav className="flex flex-col h-full justify-between py-6 px-4">
        {/* Profile Section */}
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

        {/* Navigation Links */}
        <div className="flex flex-col space-y-1">
          {/* Home Link */}
          <Link href="/">
            <div
              className={`relative flex items-center space-x-4 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                pathname === "/home"
                  ? "bg-[#1C2B2D] text-[#FBFADA]"
                  : "hover:bg-[#1C2B2D] text-[#ADBC9F]"
              }`}
            >
              {pathname === "/home" && (
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-[#ADBC9F] rounded-r transition-all duration-300"
                ></span>
              )}

              <img
                src="/assets/svg/home-svgrepo-com.svg"
                alt="Home"
                className={`h-6 w-6 filter invert ${
                  pathname === "/home" ? "brightness-200" : "brightness-75"
                } transition-all duration-200`}
              />
              <span className="text-sm font-medium">Home</span>
            </div>
          </Link>

          {/* Other Navigation Links */}
          {[
            {
              href: "/notif",
              icon: "/assets/svg/notification-bell-1394-svgrepo-com.svg",
              label: "Notifications",
            },
            {
              href: "/chat",
              icon: "/assets/svg/chat-svgrepo-com.svg",
              label: "Chat",
            },
            {
              href: "/calendar",
              icon: "/assets/svg/calendar-days-svgrepo-com.svg",
              label: "Calendar",
            },
            {
              href: "/report",
              icon: "/assets/svg/report-linechart-svgrepo-com.svg",
              label: "Report",
            },
            {
              href: "/community",
              icon: "/assets/svg/community-group-leader-svgrepo-com.svg",
              label: "Community",
            },
          ].map(({ href, icon, label }) => (
            <Link key={href} href={href}>
              <div
                className={`relative flex items-center space-x-4 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                  pathname === href
                    ? "bg-[#1C2B2D] text-[#FBFADA]"
                    : "hover:bg-[#1C2B2D] text-[#ADBC9F]"
                }`}
              >
                {pathname === href && (
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-[#ADBC9F] rounded-r transition-all duration-300"
                  ></span>
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

        {/* Logo */}
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
    </header>
  );
};

export default Header;
