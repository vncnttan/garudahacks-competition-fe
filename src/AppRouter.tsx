import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import Dictionary from "./pages/Dictionary";
import AddNewWord from "./pages/AddNewWord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wordle from "@/components/common/wordle/wordle.tsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dictionary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-new-word" element={<AddNewWord />} />
          <Route path="/wordle" element={<Wordle />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
