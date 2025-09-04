import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow-sm border-b flex items-center px-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3 relative">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          T2
        </Link>

        {/* Tìm kiếm */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Đăng nhập + Menu */}
        <div className="flex items-center space-x-4 relative">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-indigo-600"
          >
            Đăng nhập
          </Link>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiMoreVertical size={22} className="text-gray-700" />
          </button>

          {openMenu && (
            <div className="absolute right-0 top-12 w-40 bg-white border rounded-lg shadow-lg">
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Đăng ký
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Giới thiệu
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Liên hệ
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
