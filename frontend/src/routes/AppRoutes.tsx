import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/trangchu" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/trangchu" replace />} />
    </Routes>
  );
}
