import { useState } from "react";

export default function Attendance() {
  const [view, setView] = useState("monthly");

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Attendance Overview</h1>

        <div className="flex bg-slate-100 rounded-full p-1">
          <button
            onClick={() => setView("monthly")}
            className={`px-4 py-1 rounded-full text-sm ${
              view === "monthly"
                ? "bg-purple-600 text-white"
                : "text-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("weekly")}
            className={`px-4 py-1 rounded-full text-sm ${
              view === "weekly"
                ? "bg-purple-600 text-white"
                : "text-gray-600"
            }`}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* CALENDAR + LEGEND */}
      <div className="flex gap-6">

        {/* CALENDAR */}
        <div className="flex-1 bg-white rounded-xl shadow p-5">
          <Calendar />
        </div>

        {/* LEGEND */}
        <div className="w-64 bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">Attendance Status Legend</h3>

          <Legend color="bg-purple-600" label="Present" />
          <Legend color="bg-gray-300" label="Absent" />
          <Legend color="bg-yellow-400" label="Half-day" />
          <Legend color="bg-gradient-to-r from-yellow-400 to-purple-600" label="Leave" />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CHECK IN / OUT */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">Check-in / Check-out</h3>

          <div className="flex gap-4 mb-4">
            <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl">
              ⏰ Check-in
            </button>
            <button className="flex-1 bg-yellow-400 py-3 rounded-xl">
              ⏰ Check-out
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Check-in time: <span className="font-medium">09:00 AM</span>
          </p>
          <p className="text-sm text-gray-600">
            Check-out time: <span className="font-medium">--:--</span>
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">
            Attendance Summary <span className="text-sm text-gray-400">(06:00 PM)</span>
          </h3>

          <div className="grid grid-cols-3 gap-4 text-center">
            <SummaryCard title="Total Working Days" value="22" />
            <SummaryCard title="Present Days" value="20" />
            <SummaryCard title="Leave Days" value="2" />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>
      <div className="grid grid-cols-7 gap-3 text-center text-sm font-medium text-gray-500 mb-3">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map(day => (
          <div
            key={day}
            className="h-16 border rounded-lg flex items-center justify-center relative"
          >
            <span className="absolute top-2 left-2 text-xs text-gray-500">
              {day}
            </span>

            {/* STATUS DOT */}
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-4 h-4 rounded-full ${color}`}></div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-purple-700">{value}</h2>
      <div className="h-1 bg-yellow-400 w-6 mx-auto mt-2 rounded"></div>
    </div>
  );
}
