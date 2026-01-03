import EmployeeSidebar from "./EmployeeSidebar";

export default function EmployeeAttendance() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <EmployeeSidebar />

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          Attendance
        </h2>

        {/* OVERVIEW */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Attendance Overview</h3>

          <div className="grid grid-cols-7 gap-3 text-center text-sm">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="h-10 rounded bg-purple-100 flex items-center justify-center"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CHECK-IN OUT */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-4">Check-in / Check-out</h4>
            <div className="flex gap-4">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-full">
                Check-in
              </button>
              <button className="bg-yellow-400 px-6 py-3 rounded-full">
                Check-out
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-600">
              Check-in time: 09:00 AM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-4">Attendance Summary</h4>
            <p>Total Working Days: <b>22</b></p>
            <p>Present Days: <b>20</b></p>
            <p>Leave Days: <b>2</b></p>
          </div>
        </div>
      </main>
    </div>
  );
}
