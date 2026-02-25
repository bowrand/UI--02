import { Suspense } from "react";
import AdminDashboardContent from "./components/AdminDashboardContent";

export const metadata = {
  title: "Admin Dashboard | Mr. Mech",
  description: "Manage your website content easily.",
};

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-full text-gray-500">Loading...</div>}>
      <AdminDashboardContent />
    </Suspense>
  );
}
