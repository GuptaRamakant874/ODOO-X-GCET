import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EmployeeSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const Item = ({ label, path }) => (
    <button
      onClick={() => navigate(path)}
      className={`w-full text-left px-3 py-2 rounded-lg transition ${
        location.pathname === path
          ? "bg-purple-100 text-purple-700 font-medium"
          : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="w-64 bg-white shadow-md px-4 py-6 flex flex-col">
      {/* LOGO */}
      <h1 className="text-2xl font-bold text-purple-700 mb-8">
        Dayflow
      </h1>

      {/* NAVIGATION */}
      <nav className="space-y-2 flex-1">
        <Item label="Dashboard" path="/employee" />
        <Item label="My Profile" path="/employee/profile" />
        <Item label="Attendance" path="/employee/attendance" />
        <Item label="Leave Management" path="/employee/leave" />
        {/* <Item label="Payroll" path="/employee/payroll" /> */}
      </nav>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition"
      >
        <span className="text-lg">🚪</span>
        <span className="text-sm font-medium">Log out</span>
      </button>
    </aside>
  );
}
