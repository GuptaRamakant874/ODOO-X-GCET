import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-purple-700">
          Admin Dashboard
        </h2>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          title="Total Employees"
          value="150"
          sub="Active: 145 | Inactive: 5"
        />
        <Card
          title="Today's Attendance"
          value="130"
          sub="Present: 130 | Absent: 15"
        />
        <Card
          title="Pending Leave Requests"
          value="8"
          badge
        />
        <Card
          title="Payroll Status"
          value="Processed"
          sub="Next Run: 30th"
        />
      </div>

      {/* EMPLOYEE OVERVIEW */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">
          Employee Overview
        </h3>

        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Employee Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <Row
              name="John Doe"
              dept="Engineering"
              role="Senior Developer"
              status="Active"
            />
            <Row
              name="Jane Smith"
              dept="HR"
              role="HR Manager"
              status="On Leave"
            />
            <Row
              name="Kary Gritter"
              dept="Engineering"
              role="Senior Developer"
              status="Active"
            />
          </tbody>
        </table>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-xl shadow p-5 flex gap-4">
        <button
          onClick={() => navigate("/admin/add-employee")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          + Add New Employee
        </button>

        <button
          onClick={() => navigate("/admin/leave-requests")}
          className="bg-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-500"
        >
          View Leave Requests
        </button>
      </div>

      {/* LOGOUT AT BOTTOM */}
      <div className="mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition"
        >
          🚪 <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Card({ title, value, sub, badge }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-purple-700">{value}</h2>
      {sub && <p className="text-sm text-gray-400">{sub}</p>}
      {badge && (
        <span className="text-yellow-600 font-semibold">
          Requires Action
        </span>
      )}
    </div>
  );
}

function Row({ name, dept, role, status }) {
  return (
    <tr className="border-t hover:bg-slate-50">
      <td className="p-3">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{role}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "Active"
              ? "bg-purple-100 text-purple-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
