import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          T2 🚀
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Trang chủ
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Đăng nhập
          </Link>
          <Link to="/register" className="hover:text-gray-200">
            Đăng ký
          </Link>
        </nav>
      </div>
    </header>
  );
}
