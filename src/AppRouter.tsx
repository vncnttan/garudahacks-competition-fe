import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import VideoCall from "./pages/VideoCall";
import Dictionary from "./pages/Dictionary";
import AddNewWord from "./pages/AddNewWord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useMeMutation } from "./api/mutation/use-auth-mutations";
import { useEffect, useState } from "react";

export default function AppRouter() {
  const [username, setUsername] = useState<string>("");
  const accessToken : any = localStorage.getItem("token");
  const { mutate, isPending } = useMeMutation({
    onSuccess: (res) => {
      const data = res.data
      if(data){
        setUsername(data["username"])
        console.log(username)
      }
    },
  });

  useEffect(() => {
    if (accessToken) {
      mutate({ accessToken });
    }
  }, [accessToken, mutate]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout username={username}/>}>
          <Route path="/videocall" element={<VideoCall/>}/>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/" element={<Dictionary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-new-word" element={<AddNewWord />} />
        </Route>
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <Login/>} />
        <Route path="/register" element={accessToken ? <Navigate to="/" replace /> : <Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
