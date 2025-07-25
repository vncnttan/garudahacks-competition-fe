import { Outlet } from "react-router-dom";
import AppNavbar from "@/components/common/app-navbar.tsx";

interface MainLayoutProps {
  username: string | undefined
}

export default function MainLayout({username} : MainLayoutProps) {
  return (
    <div className="bg-gray-100">
      <AppNavbar username={username}/>
      <Outlet />
    </div>
  );
}
