import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "@/pages/Landing.tsx";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}