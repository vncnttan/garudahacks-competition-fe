import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import VideoCall from "./pages/VideoCall";
import Dictionary from "./pages/Dictionary";
import AddNewWord from "./pages/AddNewWord";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/videocall" element={<VideoCall/>}/>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/" element={<Dictionary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-new-word" element={<AddNewWord />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
