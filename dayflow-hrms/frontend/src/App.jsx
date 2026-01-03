import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./pages/admin/AdminLayout";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/employee/Profile";
import Attendance from "./pages/employee/Attendance";
import Leave from "./pages/employee/Leave";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AAttendance from "./pages/admin/AAttendance";
import LeaveApprovals from "./pages/admin/LeaveApproval";
import Payroll from "./pages/admin/Payroll";
import Employees from "./pages/admin/Employees";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/employee/profile" element={<Profile />} />
        <Route path="/employee/attendance" element={<Attendance />} />
        <Route path="/employee/leave" element={<Leave />} />
        <Route path="/employee/payroll" element={<Payroll />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<AAttendance />} />
          <Route path="leaves" element={<LeaveApprovals />} />
          <Route path="payroll" element={<Payroll />} />
        </Route>
      




    </Routes>
  );
}
