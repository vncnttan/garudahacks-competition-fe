import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import maknaIcon from "@/assets/makna-remove-bg.png";
import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface AppNavBarProps {
  username: string | undefined,
}

export default function AppNavbar({ username }: AppNavBarProps) {
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between place-items-center">
        <img src={maknaIcon} alt="Makna Icon" className="w-32" />
        <div className="flex flex-row gap-5 xl:gap-24">
          <Link to="/">Dictionary</Link>
          <Link to="/voice-translation">Voice Translation</Link>
          <Link to="/videocall">Video Chat</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>

        {username ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="focus:outline-none focus:ring-0">
                <User/>
                Hello, {username}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        ) : (
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
