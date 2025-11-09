import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm top-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white py-2 text-sm font-medium tracking-wide text-center">
        ✨ Miễn phí vận chuyển cho đơn hàng từ 500.000đ ✨
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-pink-500">Beauty</span>Glow
            </h1>
          </a>
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-5 pr-12 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-rose-400 text-white p-2 rounded-full hover:from-rose-400 hover:to-pink-500 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div
              className="relative flex flex-col items-center text-gray-600 hover:text-pink-500 cursor-pointer"
              onMouseEnter={() => setIsAccountOpen(true)}
              onMouseLeave={() => setIsAccountOpen(false)}
            >
              <svg
                className="w-5 h-5 mb-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs font-medium">Tài khoản</span>

              {isAccountOpen && (
                <div className="absolute top-10 right-0 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-[9999]">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-sm transition"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-sm transition"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-sm transition"
                  >
                    Quản lý tài khoản
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/favorite"
              className="flex flex-col items-center text-gray-600 hover:text-pink-500"
            >
              <svg
                className="w-5 h-5 mb-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xs font-medium">Yêu thích</span>
            </Link>
            <Link
              to="/cart"
              className="relative flex flex-col items-center text-gray-600 hover:text-pink-500"
            >
              <svg
                className="w-5 h-5 mb-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-xs font-medium">Giỏ hàng</span>
              <span className="absolute -top-1 -right-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                3
              </span>
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex justify-center bg-pink-50 rounded-2xl mt-3 py-2.5 shadow-sm">
          <div className="flex space-x-6">
            {[
              { name: "Trang chủ", path: "/" },
              { name: "Khuyến mãi", path: "/promotions" },
              { name: "Hướng dẫn", path: "/guide" },
              { name: "Liên hệ", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-gray-700 hover:text-pink-600 font-medium rounded-lg transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
