import EmployeeSidebar from "./EmployeeSidebar";

export default function Leave() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <EmployeeSidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-purple-700">
          Leave Management (Coming Soon)
        </h2>
      </main>
    </div>
  );
}
