export default function Payroll() {
  return (
    <div className="space-y-8">

      {/* ================= PAYROLL OVERVIEW ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatCard
          title="Total Employees"
          value="150"
          sub="Payroll Eligible"
        />
        <StatCard
          title="Payroll Processed"
          value="145"
          sub="This Month"
        />
        <StatCard
          title="Pending Payroll"
          value="5"
          sub="Requires Action"
          warning
        />
        <StatCard
          title="Next Payroll Run"
          value="30th"
          sub="This Month"
        />

      </div>

      {/* ================= PAYROLL RECORDS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT TABLE */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-purple-700">
              Payroll Records
            </h2>

            <div className="flex gap-3">
              <select className="border rounded-lg px-3 py-1 text-sm">
                <option>Month</option>
              </select>
              <select className="border rounded-lg px-3 py-1 text-sm">
                <option>Department</option>
              </select>
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Employee Name</th>
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

        {/* RIGHT ACTION PANEL */}
        <div className="bg-white rounded-xl shadow p-5 space-y-6">

          <h3 className="font-semibold text-lg">Payroll Actions</h3>

          <div>
            <label className="text-sm text-gray-600">Payroll Month</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>October 2026</option>
              <option>September 2026</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Department</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>HR</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button className="bg-purple-600 text-white py-2 rounded-lg">
              ▶ Process Payroll
            </button>
            <button className="bg-yellow-400 py-2 rounded-lg">
              ⬇ Download Payslips
            </button>
            <button className="border border-purple-600 text-purple-600 py-2 rounded-lg">
              View Payroll Summary
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, sub, warning }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
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
    <tr className="border-t">
      <td className="p-3">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{basic}</td>
      <td className="p-3">{deduction}</td>
      <td className="p-3 font-medium">{net}</td>
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
