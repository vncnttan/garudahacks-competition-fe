export default function AppNavbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between place-items-center">
        <h1 className="text-white text-2xl">Logo</h1>
        <div className="flex flex-row gap-5 md:gap-24">
          <div>Leaderboards</div>
          <div>Dictionary</div>
          <div>Video Chat</div>
        </div>
        <div className="text-white text-base">Vincent Tanjaya</div>
      </div>
    </nav>
  );
}
