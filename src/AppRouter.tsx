import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "@/pages/Landing.tsx";
import Login from "./pages/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}