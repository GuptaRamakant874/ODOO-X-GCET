import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 backend later
    alert("Employee added successfully ✅");
    navigate("/admin"); // ✅ redirect to dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-purple-600 px-6 py-4">
          <h2 className="text-2xl font-semibold text-white">
            ➕ Add New Employee
          </h2>
          <p className="text-purple-100 text-sm">
            Fill in the details to add a new employee
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          <Input
            label="👤 Full Name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            label="📧 Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="🏢 Department"
            name="department"
            placeholder="Engineering / HR"
            value={form.department}
            onChange={handleChange}
            required
          />

          <Input
            label="💼 Role"
            name="role"
            placeholder="Software Engineer"
            value={form.role}
            onChange={handleChange}
            required
          />

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 shadow"
            >
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ================= INPUT COMPONENT ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
