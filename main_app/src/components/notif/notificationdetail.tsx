"use client";

import React from "react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
}

interface NotificationDetailProps {
  notification: Notification;
  onBack: () => void;
}

const NotificationDetail: React.FC<NotificationDetailProps> = ({
  notification,
  onBack,
}) => {
  return (
    <div className="p-8 bg-[#1E2D2F] text-[#FBFADA] h-full">
      <button
        onClick={onBack}
        className="text-[#ADBC9F] hover:underline mb-4"
      >
        &larr; Back to Notifications
      </button>
      <h1 className="text-2xl font-semibold mb-4 truncate md:truncate-none">
        {notification.title}
      </h1>
      <p className="text-sm mb-2">{notification.time}</p>
      <p className="text-base leading-relaxed line-clamp-3 md:line-clamp-none">
        {notification.description}
      </p>
    </div>
  );
};

export default NotificationDetail;
