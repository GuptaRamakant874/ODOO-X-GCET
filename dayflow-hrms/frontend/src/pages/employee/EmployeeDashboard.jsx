import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";


export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md px-4 py-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-8">
          Dayflow
        </h1>

        <nav className="space-y-4">
  <button
    onClick={() => navigate("/employee")}
    className="block w-full text-left"
  >
    Dashboard
  </button>

  <button
    onClick={() => navigate("/employee/profile")}
    className="block w-full text-left"
  >
    My Profile
  </button>

  <button
    onClick={() => navigate("/employee/attendance")}
    className="block w-full text-left"
  >
    Attendance
  </button>

  <button
    onClick={() => navigate("/employee/leave")}
    className="block w-full text-left"
  >
    Leave Management
  </button>

  <button
    onClick={() => navigate("/employee/payroll")}
    className="block w-full text-left"
  >
    Payroll
  </button>
</nav>


        <button
          onClick={logout}
          className="mt-10 text-red-600 text-sm"
        >
          Log out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-purple-700">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-500">🔔</span>
            <div className="w-9 h-9 rounded-full bg-purple-200" />
          </div>
        </div>

        {/* GREETING */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-purple-700">
            Good Morning, {user?.email || "Employee"}
          </h3>
          <p className="text-gray-600">
            Role: <span className="font-medium">Employee</span>
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
  title="Today's Attendance Status"
  value="Present"
  sub="Check-in: 09:00 AM"
  highlight="green"
  onClick={() => navigate("/employee/attendance")}
/>

<StatCard
  title="Leaves Taken (This Month)"
  value="2"
  sub="Total Annual: 12"
  onClick={() => navigate("/employee/leave")}
/>

<StatCard
  title="Pending Leave Requests"
  value="1"
  sub="Last update: 2 days ago"
  badge="Pending"
  onClick={() => navigate("/employee/leave")}
/>

<StatCard
  title="Salary Status"
  value="Paid"
  sub="Next Payday: 30th"
  highlight="green"
  onClick={() => navigate("/employee/profile")}
/>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h4 className="text-lg font-semibold text-purple-700 mb-4">
            Recent Activity
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEAVE */}
            <div>
              <p className="font-medium mb-2">Recent Leave Applications</p>
              <ActivityItem
                text="Sick Leave - 1 Day"
                status="Approved"
              />
              <ActivityItem
                text="Vacation - 3 Days"
                status="Pending"
              />
            </div>

            {/* ATTENDANCE */}
            <div>
              <p className="font-medium mb-2">Recent Attendance Entries</p>
              <p className="text-sm text-gray-600">
                24 Oct - Present (09:00 AM - 06:00 PM)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                23 Oct - Present (09:15 AM - 06:15 PM)
              </p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        {/* ACTION BUTTONS */}
<div className="flex justify-center gap-6">
  <button
    onClick={() => navigate("/employee/leave")}
    className="bg-purple-700 text-white px-6 py-3 rounded-full shadow hover:bg-purple-800"
  >
    + Apply for Leave
  </button>

  <button
    onClick={() => navigate("/employee/attendance")}
    className="bg-yellow-400 text-black px-6 py-3 rounded-full shadow hover:bg-yellow-500"
  >
    ✓ Mark Attendance
  </button>
</div>

      </main>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SidebarItem({ label, active }) {
  return (
    <div
      className={`px-3 py-2 rounded cursor-pointer ${
        active
          ? "bg-purple-100 text-purple-700 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );
}

function StatCard({ title, value, sub, badge, highlight, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
    >
      <p className="text-sm text-gray-500 mb-1">{title}</p>

      <h3
        className={`text-xl font-bold ${
          highlight === "green" ? "text-green-600" : "text-purple-700"
        }`}
      >
        {value}
      </h3>

      <p className="text-sm text-gray-500">{sub}</p>

      {badge && (
        <span className="inline-block mt-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
          {badge}
        </span>
      )}
    </div>
  );
}


function ActivityItem({ text, status }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span>{text}</span>
      <span
        className={`px-2 py-1 rounded text-xs ${
          status === "Approved"
            ? "bg-green-200 text-green-700"
            : "bg-yellow-200 text-yellow-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
