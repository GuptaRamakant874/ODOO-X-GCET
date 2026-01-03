import { useState } from "react";

export default function LeaveRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      type: "Sick Leave",
      duration: "1 Day",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "HR",
      type: "Casual Leave",
      duration: "3 Days",
      status: "Pending",
    },
    {
      id: 3,
      name: "Kary Gritter",
      department: "Engineering",
      type: "Paid Leave",
      duration: "2 Days",
      status: "Approved",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          Leave Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Employee</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Leave Type</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-t hover:bg-slate-50">
                  <td className="p-3">{req.name}</td>
                  <td className="p-3">{req.department}</td>
                  <td className="p-3">{req.type}</td>
                  <td className="p-3">{req.duration}</td>
                  <td className="p-3">
                    <StatusBadge status={req.status} />
                  </td>
                  <td className="p-3 flex gap-2">
                    {req.status === "Pending" && (
                      <>
                        <button
                          onClick={() =>
                            updateStatus(req.id, "Approved")
                          }
                          className="px-3 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            updateStatus(req.id, "Rejected")
                          }
                          className="px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENT ================= */

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
