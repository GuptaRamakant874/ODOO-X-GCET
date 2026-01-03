import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EmployeeSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const Item = ({ label, path }) => (
    <div
      onClick={() => navigate(path)}
      className={`px-3 py-2 rounded cursor-pointer ${
        location.pathname === path
          ? "bg-purple-100 text-purple-700 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );

  return (
    <aside className="w-64 bg-white shadow-md px-4 py-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-8">Dayflow</h1>

      <nav className="space-y-4">
        <Item label="Dashboard" path="/employee" />
        <Item label="My Profile" path="/employee/profile" />
        <Item label="Attendance" path="/employee/attendance" />
        <Item label="Leave Management" path="/employee" />
        <Item label="Payroll" path="/employee" />
      </nav>

      <button onClick={logout} className="mt-10 text-red-600 text-sm">
        Log out
      </button>
    </aside>
  );
}
