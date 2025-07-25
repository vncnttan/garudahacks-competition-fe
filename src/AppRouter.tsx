import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import VideoCall from "./pages/VideoCall/VideoCall";
import Dictionary from "./pages/Dictionary";
import AddNewWord from "./pages/AddNewWord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { useMeQuery } from "./api/query/use-user-query";
import Profile from "./pages/Profile";
import Game from "./pages/Game";

export default function AppRouter() {
  const accessToken: any = localStorage.getItem("token");
  const [username, setUsername] = useState<string>("");
  const { data } = useMeQuery();

  useEffect(() => {
    if (data?.data?.username) {
      setUsername(data.data.username);
    }
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout username={username} />}>
          <Route path="/" element={<Dictionary />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-new-word" element={<AddNewWord />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
        </Route>
        <Route
          path="/login"
          element={accessToken ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={accessToken ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}
