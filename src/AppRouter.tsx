import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Landing from "./pages/Landing";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
