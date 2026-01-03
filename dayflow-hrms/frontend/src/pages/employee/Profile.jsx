import EmployeeSidebar from "./EmployeeSidebar";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <EmployeeSidebar />

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          My Profile
        </h2>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-lg shadow p-6 mb-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Employee Name</h3>
            <p className="text-gray-600">Job Title</p>
            <p className="text-gray-500 text-sm">Employee ID: ID123</p>
          </div>
          <button className="bg-purple-700 text-white px-5 py-2 rounded-full">
            Edit Profile
          </button>
        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Personal Details">
            <Input label="Full Name" />
            <Input label="Phone Number" />
            <Input label="Address" />
          </Card>

          <Card title="Job Details">
            <p>Department: Engineering</p>
            <p>Role: Employee</p>
            <p>Joining Date: 01 Jan 2024</p>
          </Card>

          <Card title="Salary Details">
            <p>Basic Salary: ₹40,000</p>
            <p>Allowances: ₹5,000</p>
            <p>Deductions: ₹2,000</p>
            <p className="font-bold bg-yellow-100 p-2 rounded">
              Net Salary: ₹43,000
            </p>
          </Card>

          <Card title="Documents">
            <p>📄 Offer Letter</p>
            <p>📄 ID Proof</p>
            <p>📄 Other Files</p>
          </Card>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full">
            Save Changes
          </button>
          <button className="bg-yellow-400 px-6 py-2 rounded-full">
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="space-y-2 text-sm text-gray-700">{children}</div>
    </div>
  );
}

function Input({ label }) {
  return (
    <input
      className="w-full border rounded p-2"
      placeholder={label}
    />
  );
}
