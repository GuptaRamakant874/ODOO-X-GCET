import { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";

export default function EmployeeAttendance() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // current month state
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0–11

  // total days in month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // starting day index (Sun=0)
  const startDayIndex = new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const goPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <EmployeeSidebar />

      <main className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-purple-700">
            Attendance
          </h2>

          {/* MONTH SWITCHER */}
          <div className="flex items-center gap-3 bg-white shadow rounded-full px-4 py-2">
            <button
              onClick={goPrevMonth}
              className="text-purple-700 font-bold"
            >
              ◀
            </button>

            <span className="font-medium">
              {monthName} {year}
            </span>

            <button
              onClick={goNextMonth}
              className="text-purple-700 font-bold"
            >
              ▶
            </button>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Attendance Overview</h3>

          {/* DAYS HEADER */}
          <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-3">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* CALENDAR GRID */}
          <div className="grid grid-cols-7 gap-3 text-center text-sm">
            {/* EMPTY CELLS */}
            {[...Array(startDayIndex)].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* DATES */}
            {[...Array(totalDays)].map((_, i) => (
              <div
                key={i}
                className="h-12 rounded bg-purple-100 flex items-center justify-center hover:bg-purple-200 cursor-pointer"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CHECK-IN / CHECK-OUT */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-4">Check-in / Check-out</h4>
            <div className="flex gap-4">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-full">
                Check-in
              </button>
              <button className="bg-yellow-400 px-6 py-3 rounded-full">
                Check-out
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-600">
              Check-in time: 09:00 AM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-4">Attendance Summary</h4>
            <p>Total Working Days: <b>22</b></p>
            <p>Present Days: <b>20</b></p>
            <p>Leave Days: <b>2</b></p>
          </div>
        </div>
      </main>
    </div>
  );
}
