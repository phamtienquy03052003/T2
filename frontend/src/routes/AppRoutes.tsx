import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dangnhap" element={<LoginPage />} />
      <Route path="/dangky" element={<RegisterPage />} />
      <Route path="/trangchu" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/trangchu" replace />} />
    </Routes>
  );
}
