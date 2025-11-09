import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Tag,
  ShoppingBag,
  BarChart3,
  LogOut,
} from "lucide-react";

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    {
      name: "Bảng điều khiển",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Quản lý sản phẩm",
      path: "/admin/products",
      icon: <Package size={18} />,
    },
    {
      name: "Quản lý tài khoản",
      path: "/admin/users",
      icon: <Users size={18} />,
    },
    {
      name: "Quản lý giảm giá",
      path: "/admin/discounts",
      icon: <Tag size={18} />,
    },
    {
      name: "Quản lý đơn hàng",
      path: "/admin/orders",
      icon: <ShoppingBag size={18} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F7F8FA] font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1F1F1F] text-gray-200 shadow-xl hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-pink-500 tracking-tight">
            BeautyGlow
          </h1>
          <p className="text-xs text-gray-400 mt-1">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow"
                    : "hover:bg-pink-500/20 hover:text-white text-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© 2025 BeautyGlow</p>
          <div className="mt-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-pink-500/20 text-pink-300 hover:bg-pink-600/30 hover:text-white rounded-full transition"
            >
              <LogOut size={16} />
              Quay lại người dùng
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">
            Admin Panel
          </h2>
          <Link
            to="/"
            className="text-sm bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-1.5 rounded-full font-medium hover:from-rose-400 hover:to-pink-500 transition"
          >
            Trang người dùng
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto bg-[#F7F8FA]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
