import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // LOGOUT HANDLER
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white shadow-md px-4 py-6 flex flex-col">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-purple-700 mb-8">
          Dayflow
        </h1>

        {/* NAVIGATION */}
        <nav className="space-y-4 flex-1">
          <SidebarBtn label="Dashboard" onClick={() => navigate("/employee")} />
          <SidebarBtn label="My Profile" onClick={() => navigate("/employee/profile")} />
          <SidebarBtn label="Attendance" onClick={() => navigate("/employee/attendance")} />
          <SidebarBtn label="Leave Management" onClick={() => navigate("/employee/leave")} />
          {/* <SidebarBtn label="Payroll" onClick={() => navigate("/employee/payroll")} /> */}
        </nav>

        {/* LOGOUT AT BOTTOM */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition"
        >
          🚪 <span className="text-sm font-medium">Log out</span>
        </button>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-purple-700">
            Dashboard
          </h2>

          {/* PROFILE SECTION */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow">
            <span className="text-gray-500">🔔</span>

            {/* PROFILE IMAGE */}
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-9 h-9 rounded-full border"
            />

            <div className="text-sm">
              <p className="font-medium text-gray-700">
                {user?.email?.split("@")[0] || "Employee"}
              </p>
              <p className="text-xs text-gray-400">Employee</p>
            </div>
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
            <div>
              <p className="font-medium mb-2">Recent Leave Applications</p>
              <ActivityItem text="Sick Leave - 1 Day" status="Approved" />
              <ActivityItem text="Vacation - 3 Days" status="Pending" />
            </div>

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
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/employee/applyleave")}
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

/* ================= COMPONENTS ================= */

function SidebarBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition"
    >
      {label}
    </button>
  );
}

function StatCard({ title, value, sub, badge, highlight, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
    >
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <h3 className={`text-xl font-bold ${highlight === "green" ? "text-green-600" : "text-purple-700"}`}>
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
