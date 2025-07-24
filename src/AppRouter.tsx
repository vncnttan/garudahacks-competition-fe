import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Leaderboard from "@/pages/Leaderboard.tsx";
import Dictionary from "./pages/Dictionary";
import AddNewWord from "./pages/AddNewWord";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dictionary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-new-word" element={<AddNewWord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
