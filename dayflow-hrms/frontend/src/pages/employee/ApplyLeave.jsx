import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar";

export default function ApplyLeave() {
  const navigate = useNavigate();

  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  // calculate total days
  const totalDays =
    startDate && endDate
      ? Math.max(
          1,
          Math.floor(
            (new Date(endDate) - new Date(startDate)) /
              (1000 * 60 * 60 * 24)
          ) + 1
        )
      : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!leaveType) {
      alert("Please select leave type");
      return;
    }

    if (!startDate || !endDate) {
      alert("Please select start and end date");
      return;
    }

    // ✅ success flow
    alert("Leave request submitted successfully 📝");
    navigate("/employee");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <EmployeeSidebar />

      {/* MAIN CONTENT */}
      <main className=" flex-1 p-6">
        <div className="ml-20space-y-8">
        <div className=" container justify-center items-center">
          {/* PAGE HEADER */}
          <div className="text-center">
          <div>
            <h1 className="text-2xl font-bold text-purple-700">
              Apply for Leave
            </h1>
            <p className="text-gray-600">
              Submit your leave request for approval
            </p>
          </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-xl shadow p-6 ">

            <h2 className="font-semibold text-lg mb-4">
              Leave Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* LEAVE TYPE */}
              <div>
                <label className="text-sm font-medium">
                  Leave Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select leave type</option>
                  <option value="Paid Leave">Paid Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                </select>
              </div>

              {/* DATES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>
              </div>

              {/* REASON */}
              <div>
                <label className="text-sm font-medium">
                  Reason / Remarks{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter reason for leave"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  rows={3}
                />
              </div>

              {/* LEAVE SUMMARY */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <strong>Leave Summary:</strong>{" "}
                {totalDays > 0
                  ? `Total Leave Days: ${totalDays}`
                  : "Select dates to calculate total days"}
              </div>

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate("/employee/leave")}
                  className="px-5 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800"

                >
                  Submit Leave Request
                </button>
              </div>

            </form>
          </div>
        </div>

          {/* LEAVE STATUS OVERVIEW */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Leave Status Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatusCard title="Total Leaves Available" value="12" />
              <StatusCard title="Leaves Used" value="2" />
              <StatusCard title="Pending Leave Requests" value="1" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ---------------- COMPONENT ---------------- */

function StatusCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-purple-700">{value}</h2>
    </div>
  );
}
