export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card title="Total Employees" value="150" sub="Active: 145 | Inactive: 5" />
        <Card title="Today's Attendance" value="130" sub="Present: 130 | Absent: 15" />
        <Card title="Pending Leave Requests" value="8" badge />
        <Card title="Payroll Status" value="Processed" sub="Next Run: 30th" />

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
            <Row name="John Doe" dept="Engineering" role="Senior Developer" status="Active" />
            <Row name="Jane Smith" dept="HR" role="HR Manager" status="On Leave" />
            <Row name="Kary Gritter" dept="Engineering" role="Senior Developer" status="Active" />
          </tbody>
        </table>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-xl shadow p-5 flex gap-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          + Add New Employee
        </button>
        <button className="bg-yellow-400 px-6 py-2 rounded-lg">
          View Leave Requests
        </button>
      </div>

    </div>
  );
}

/* SMALL COMPONENTS */

function Card({ title, value, sub, badge }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-purple-700">{value}</h2>
      {sub && <p className="text-sm text-gray-400">{sub}</p>}
      {badge && <span className="text-yellow-600 font-semibold">Requires Action</span>}
    </div>
  );
}

function Row({ name, dept, role, status }) {
  return (
    <tr className="border-t">
      <td className="p-3">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{role}</td>
      <td className="p-3">
        <span className={`px-3 py-1 rounded-full text-sm
          ${status === "Active" ? "bg-purple-100 text-purple-700" : "bg-yellow-100 text-yellow-700"}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
