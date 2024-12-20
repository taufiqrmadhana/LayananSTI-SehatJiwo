"use client";

import React from "react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
}

interface NotificationListProps {
  notifications: Notification[];
  onSelect: (id: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onSelect,
}) => {
  return (
    <div className="space-y-4">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          onClick={() => onSelect(notif.id)}
          className="p-4 flex justify-between items-center bg-[#1E2D2F] rounded-md shadow-md hover:bg-[#2A3E40] transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <img
              src={notif.icon}
              alt={notif.title}
              className="h-6 w-6 filter invert"
            />
            <div>
              <h2 className="text-[#FBFADA] font-medium">{notif.title}</h2>
              <p className="text-sm text-[#ADBC9F] truncate">
                {notif.description}
              </p>
            </div>
          </div>
          <span className="text-sm text-[#FBFADA]">{notif.time}</span>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
