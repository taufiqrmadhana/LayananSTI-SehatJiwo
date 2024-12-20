"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-custom.css";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const agenda: { [key: string]: string[] } = {
    "2024-12-22": ["Sesi Konsultasi", "Deadline Assignment"],
    "2024-12-25": ["Libur Natal"],
    "2024-12-29": ["Konsultasi"],
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const key = formatDate(date);
    return agenda[key] ? (
      <div className="flex justify-center items-center mt-1">
        <div className="w-2 h-2 rounded-full bg-[#ADBC9F]"></div>
      </div>
    ) : null;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0D1B1E]">
      <div className="w-full max-w-4xl bg-[#1E2D2F] p-6 rounded-lg shadow-lg">
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={tileContent}
          className="custom-calendar"
          onClickDay={handleDateClick}
        />
        {selectedDate && (
          <div className="mt-4 p-4 bg-[#12372A] rounded-md">
            <h2 className="text-xl font-semibold text-[#FBFADA]">
              Agenda untuk {selectedDate.toLocaleDateString()}
            </h2>
            <ul className="mt-2 text-[#ADBC9F] text-sm">
              {agenda[formatDate(selectedDate)]?.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
