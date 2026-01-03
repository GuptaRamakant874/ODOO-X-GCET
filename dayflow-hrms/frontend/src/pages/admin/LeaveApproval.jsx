export default function LeaveApprovals() {
  return (
    <div className="space-y-8">

      {/* ================= ATTENDANCE RECORDS ================= */}
      <div className="bg-white rounded-xl shadow p-5">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-purple-700">
            Attendance Records
          </h2>

          <div className="flex gap-3">
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>Date</option>
            </select>
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>Employee</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">Employee Name</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Check-in</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Check-out</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <AttendanceRow
              name="John Doe"
              dept="Engineering"
              status="Absent"
            />
            <AttendanceRow
              name="Jane Sritter"
              dept="HR"
              status="Half-day"
            />
            <AttendanceRow
              name="Kary Gritter"
              dept="Engineering"
              status="Leave"
            />
          </tbody>
        </table>
      </div>

      {/* ================= LEAVE REQUESTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT TABLE */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">
            Leave Requests
          </h2>

          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Employee Name</th>
                <th className="p-3 text-left">Date Range</th>
                <th className="p-3 text-left">Days</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <LeaveRow
                name="John Type"
                range="Abdi Senay"
                days="0"
                status="Absent"
              />
              <LeaveRow
                name="Jane Smith"
                range="Date Range"
                days="1"
                status="Half-day"
              />
              <LeaveRow
                name="Jane Smith"
                range="Vacation - 5 Days"
                days="15"
                status="Approved"
                highlight
              />
            </tbody>
          </table>
        </div>

        {/* RIGHT ACTION PANEL */}
        <div className="bg-white rounded-xl shadow p-5 space-y-5">

          <div>
            <label className="text-sm text-gray-600">Status</label>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Suduro"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Reason</label>
            <div className="flex gap-3 mt-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Approved
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                Rejected
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg">
              + Approve
            </button>
            <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg">
              + Reject
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function AttendanceRow({ name, dept, status }) {
  return (
    <tr className="border-t">
      <td className="p-3">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3 text-center">+</td>
      <td className="p-3">09:50</td>
      <td className="p-3 text-center">+</td>
      <td className="p-3">18:10</td>
      <td className="p-3">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
}

function LeaveRow({ name, range, days, status, highlight }) {
  return (
    <tr className={`border-t ${highlight ? "bg-yellow-50" : ""}`}>
      <td className="p-3">{name}</td>
      <td className="p-3">
        {highlight ? (
          <span className="px-3 py-1 bg-yellow-100 rounded-full text-sm">
            {range}
          </span>
        ) : (
          range
        )}
      </td>
      <td className="p-3">{days}</td>
      <td className="p-3">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const map = {
    Absent: "bg-gray-200 text-gray-700",
    "Half-day": "bg-yellow-100 text-yellow-700",
    Leave: "bg-purple-100 text-purple-700",
    Approved: "bg-green-100 text-green-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${map[status]}`}>
      {status}
    </span>
  );
}
