import { Outlet } from "react-router-dom";
import AppNavbar from "@/components/common/app-navbar.tsx";

export default function MainLayout() {
  return (
    <div className="bg-gray-100">
      <AppNavbar />
      <Outlet />
    </div>
  );
}
