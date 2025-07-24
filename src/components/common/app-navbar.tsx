import { Link } from "react-router-dom"

export default function AppNavbar() {
  return (
    <nav className="bg-black text-white p-4 sticky">
      <div className="container mx-auto flex justify-between place-items-center">
        <h1 className="text-white text-2xl">Logo</h1>
        <div className="flex flex-row gap-5 md:gap-24">
          <Link to="/">Dictionary</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/video-chat">Video Chat</Link>
        </div>
        <div className="text-white text-base">Vincent Tanjaya</div>
      </div>
    </nav>
  );
}
