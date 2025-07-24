import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import VideoCall from "./pages/VideoCall";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/videocall" element={<VideoCall/>}/>
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
