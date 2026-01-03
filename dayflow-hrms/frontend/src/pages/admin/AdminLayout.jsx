import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md px-5 py-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-8">
          Dayflow
        </h1>

        <nav className="space-y-4 text-gray-700">
          <button onClick={() => navigate("/admin")} className="block">
            Dashboard
          </button>
          <button onClick={() => navigate("/admin/employees")} className="block">
            Employee Management
          </button>
          <button onClick={() => navigate("/admin/attendance")} className="block">
            Attendance Management
          </button>
          <button onClick={() => navigate("/admin/leaves")} className="block">
            Leave Approvals
          </button>
          <button onClick={() => navigate("/admin/payroll")} className="block">
            Payroll Management
          </button>
        </nav>

        <button className="mt-10 text-red-500">Log out</button>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        {/* TOP BAR */}
        <div className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-purple-700">
            Admin Dashboard
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">name – Admin</span>
            <div className="w-9 h-9 rounded-full bg-purple-300" />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
