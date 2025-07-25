import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import maknaIcon from "@/assets/makna-remove-bg.png";

interface AppNavBarProps {
  username: string;
}

export default function AppNavbar({ username }: AppNavBarProps) {
  console.log(username);
  const navigate = useNavigate();
  return (
    <nav className="bg-black text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between place-items-center">
        <img src={maknaIcon} alt="Makna Icon" className="w-32" />
        <div className="flex flex-row gap-5 md:gap-24">
          <Link to="/">Dictionary</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/videocall">Video Chat</Link>
        </div>

        {username ? (
          <div className="text-white text-base">{username}</div>
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
