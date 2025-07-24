import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import VideoCall from "./pages/VideoCall";
import Leaderboard from "@/pages/Leaderboard.tsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/VideoCall" element={<VideoCall/>}/>
          <Route path="/" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
