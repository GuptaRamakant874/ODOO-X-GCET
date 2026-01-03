import EmployeeSidebar from "../employee/EmployeeSidebar";

export default function Payroll() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      {/* <EmployeeSidebar /> */}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-8">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-purple-700">
            Payroll
          </h2>

          <select className="border rounded-lg px-4 py-2 bg-white shadow-sm">
            <option>October 2026</option>
            <option>September 2026</option>
          </select>
        </div>

        {/* ================= PAYROLL OVERVIEW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Employees" value="150" sub="Payroll Eligible" />
          <StatCard title="Payroll Processed" value="145" sub="This Month" />
          <StatCard
            title="Pending Payroll"
            value="5"
            sub="Requires Action"
            warning
          />
          <StatCard title="Next Payroll Run" value="30th" sub="This Month" />
        </div>

        {/* ================= PAYROLL SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PAYROLL TABLE */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-purple-700">
                Payroll Records
              </h3>

              <div className="flex gap-3">
                <select className="border rounded-lg px-3 py-1 text-sm">
                  <option>Department</option>
                  <option>Engineering</option>
                  <option>HR</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 text-gray-600">
                  <tr>
                    <th className="p-3 text-left">Employee</th>
                    <th className="p-3 text-left">Department</th>
                    <th className="p-3 text-left">Basic</th>
                    <th className="p-3 text-left">Deductions</th>
                    <th className="p-3 text-left">Net Salary</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <PayrollRow
                    name="John Doe"
                    dept="Engineering"
                    basic="₹50,000"
                    deduction="₹5,000"
                    net="₹45,000"
                    status="Paid"
                  />
                  <PayrollRow
                    name="Jane Smith"
                    dept="HR"
                    basic="₹40,000"
                    deduction="₹3,000"
                    net="₹37,000"
                    status="Pending"
                  />
                  <PayrollRow
                    name="Kary Gritter"
                    dept="Engineering"
                    basic="₹60,000"
                    deduction="₹10,000"
                    net="₹50,000"
                    status="Paid"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* ACTION PANEL */}
          <div className="bg-white rounded-xl shadow p-6 space-y-5">
            <h3 className="font-semibold text-lg text-purple-700">
              Payroll Actions
            </h3>

            <div>
              <label className="text-sm text-gray-600">Department</label>
              <select className="w-full border rounded-lg px-3 py-2 mt-1">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>HR</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button className="bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
                ▶ Process Payroll
              </button>
              <button className="bg-yellow-400 py-2 rounded-lg hover:bg-yellow-500">
                ⬇ Download Payslips
              </button>
              <button className="border border-purple-700 text-purple-700 py-2 rounded-lg hover:bg-purple-50">
                View Payroll Summary
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, sub, warning }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2
        className={`text-2xl font-bold ${
          warning ? "text-yellow-600" : "text-purple-700"
        }`}
      >
        {value}
      </h2>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}

function PayrollRow({ name, dept, basic, deduction, net, status }) {
  return (
    <tr className="border-t hover:bg-slate-50">
      <td className="p-3">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{basic}</td>
      <td className="p-3">{deduction}</td>
      <td className="p-3 font-semibold">{net}</td>
      <td className="p-3">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}
