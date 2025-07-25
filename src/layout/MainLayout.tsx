import { Outlet } from "react-router-dom";
import AppNavbar from "@/components/common/app-navbar.tsx";

interface MainLayoutProps {
  username: string;
}

export default function MainLayout({ username }: MainLayoutProps) {
  return (
    <div className="relative">
      <AppNavbar username={username} />
      <Outlet />
    </div>
  );
}
