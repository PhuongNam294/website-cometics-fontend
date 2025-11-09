import React from "react";
import { Package, Users, ShoppingBag, DollarSign } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      label: "Sản phẩm",
      value: 120,
      icon: <Package size={28} className="text-pink-500" />,
      color: "from-pink-50 to-pink-100",
    },
    {
      label: "Người dùng",
      value: 530,
      icon: <Users size={28} className="text-rose-500" />,
      color: "from-rose-50 to-rose-100",
    },
    {
      label: "Đơn hàng",
      value: 87,
      icon: <ShoppingBag size={28} className="text-fuchsia-500" />,
      color: "from-fuchsia-50 to-fuchsia-100",
    },
    {
      label: "Doanh thu (triệu ₫)",
      value: 210,
      icon: <DollarSign size={28} className="text-pink-600" />,
      color: "from-pink-50 to-pink-100",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-8 tracking-tight">
        Bảng điều khiển
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} border border-pink-100 shadow hover:shadow-md hover:-translate-y-1 transition-all`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white rounded-full shadow-sm mr-3">
                {card.icon}
              </div>
              <span className="text-xs text-gray-400 font-medium">
                +5% so với tháng trước
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-1">
              {card.value}
            </h2>
            <p className="text-gray-500 font-medium">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
