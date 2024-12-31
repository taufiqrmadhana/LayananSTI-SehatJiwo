"use client";

import React, { useState } from "react";
import NotificationList from "./notificationlist";
import NotificationDetail from "./notificationdetail";

const Notifications = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const notifications = [
    {
      id: 1,
      title: "New Assignment Added",
      description:
        "Lorem ipsum dolor sit amet.",
      time: "12/12 14:30",
      icon: "/assets/svg/home-svgrepo-com.svg",
    },
    {
      id: 2,
      title: "Class Reminder",
      description: "Ut enim ad minim veniam.",
      time: "11/12 09:00",
      icon: "/assets/svg/date-svgrepo-com.svg",
    },
    {
      id: 3,
      title: "System Update",
      description: "Duis aute irure dolor.",
      time: "10/12 19:00",
      icon: "/assets/svg/hazard-sign-svgrepo-com.svg",
    },
    {
      id: 4,
      title: "Submission Deadline",
      description: "Excepteur sint.",
      time: "09/12 23:59",
      icon: "/assets/svg/date-svgrepo-com.svg",
    },
  ];

  const selectedNotification = notifications.find((n) => n.id === selectedId);

  return (
    <div className="flex-1 p-8 bg-[#0F1E1E] text-black">
      {selectedNotification ? (
        <NotificationDetail
          notification={selectedNotification}
          onBack={() => setSelectedId(null)}
        />
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4 text-[#0F1E1E]">
            Notifications
          </h1>
          <NotificationList
            notifications={notifications}
            onSelect={(id) => setSelectedId(id)}
          />
        </>
      )}
    </div>
  );
};

export default Notifications;
