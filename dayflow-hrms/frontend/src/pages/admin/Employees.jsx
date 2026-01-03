import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate(); // ✅ FIX

  return (
    <div className="flex gap-6">

      {/* LEFT: EMPLOYEE LIST */}
      <div className="flex-1 bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">
          Employee List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Employee Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              <EmployeeRow
                name="Employee Name"
                department="Department"
                role="Role"
                status="Active"
              />
              <EmployeeRow
                name="Basic Rates"
                department="Department"
                role="Role"
                status="Active"
              />
              <EmployeeRow
                name="Deductions"
                department="Department"
                role="Role"
                status="On Leave"
              />
              <EmployeeRow
                name="Net Salary"
                department="Department"
                role="Role"
                status="Paid"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT: QUICK ACTIONS */}
      <div className="w-[350px] bg-white rounded-xl shadow p-5 space-y-6">
        <h3 className="font-semibold text-lg">Quick Actions</h3>

        {/* PERSONAL INFO */}
        <div>
          <h4 className="font-medium mb-2">Personal Information</h4>
          <select className="w-full border rounded-lg px-3 py-2 mb-3">
            <option>Role</option>
          </select>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>New Department</option>
          </select>
        </div>

        {/* JOB DETAILS */}
        <div>
          <h4 className="font-medium mb-2">Job Details</h4>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Department</option>
          </select>
        </div>

        {/* SALARY STRUCTURE */}
        <div>
          <h4 className="font-medium mb-2">Salary Structure</h4>
          <div className="flex items-center justify-between">
            <select className="w-full border rounded-lg px-3 py-2 mr-3">
              <option>Status (Active / On Leave)</option>
            </select>
            <Toggle />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/add-employee")} // ✅ FIX
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            + Add New Employee
          </button>

          <button className="flex-1 bg-yellow-400 py-2 rounded-lg hover:bg-yellow-500">
            Upload Documents
          </button>
        </div>

        {/* DELETE */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2 text-red-600">
            <Trash2 size={18} />
            Delete Employee
          </div>
          <Toggle danger />
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function EmployeeRow({ name, department, role, status }) {
  return (
    <tr className="border-t hover:bg-slate-50">
      <td className="p-3">{name}</td>
      <td className="p-3">{department}</td>
      <td className="p-3">{role}</td>
      <td className="p-3">
        <StatusBadge status={status} />
      </td>
      <td className="p-3 flex gap-3 text-gray-500">
        <Eye className="cursor-pointer" size={18} />
        <Pencil className="cursor-pointer" size={18} />
        <Trash2 className="cursor-pointer text-red-500" size={18} />
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Active: "bg-purple-100 text-purple-700",
    "On Leave": "bg-yellow-100 text-yellow-700",
    Paid: "bg-slate-200 text-slate-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {status}
    </span>
  );
}

function Toggle({ danger }) {
  return (
    <div
      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer
      ${danger ? "bg-red-200" : "bg-purple-200"}`}
    >
      <div className="w-4 h-4 bg-white rounded-full shadow translate-x-5"></div>
    </div>
  );
}
