import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#DH001",
      user: "Ngọc Anh",
      total: 750000,
      status: "Đã giao",
    },
    {
      id: "#DH002",
      user: "Bảo Trân",
      total: 540000,
      status: "Đang xử lý",
    },
    {
      id: "#DH003",
      user: "Minh Tú",
      total: 620000,
      status: "Đang giao",
    },
  ]);

  const handleViewDetails = (order) => {
    Swal.fire({
      title: `<strong>Chi tiết đơn ${order.id}</strong>`,
      html: `
        <div style="text-align:left">
          <p><b>Khách hàng:</b> ${order.user}</p>
          <p><b>Tổng tiền:</b> ${order.total.toLocaleString()}đ</p>
          <p><b>Trạng thái:</b> ${order.status}</p>
          <p><b>Ngày đặt:</b> 03/11/2025</p>
          <p><b>Địa chỉ giao:</b> 123 Nguyễn Văn Cừ, TP.HCM</p>
        </div>
      `,
      confirmButtonText: "Đóng",
      confirmButtonColor: "#ec4899",
    });
  };

  const handleUpdateStatus = async (order) => {
    const { value: status } = await Swal.fire({
      title: `Cập nhật trạng thái ${order.id}`,
      input: "select",
      inputOptions: {
        "Đang xử lý": "Đang xử lý",
        "Đang giao": "Đang giao",
        "Đã giao": "Đã giao",
        "Đã hủy": "Đã hủy",
      },
      inputValue: order.status,
      showCancelButton: true,
      confirmButtonText: "Lưu",
      confirmButtonColor: "#ec4899",
      cancelButtonText: "Hủy",
    });

    if (status) {
      setOrders((prev) =>
        prev.map((o) => (o.id === order.id ? { ...o, status } : o))
      );
      Swal.fire(
        "Cập nhật thành công!",
        "Trạng thái đơn hàng đã thay đổi.",
        "success"
      );
    }
  };

  const handleCancel = async (order) => {
    if (order.status === "Đã giao" || order.status === "Đang giao") {
      Swal.fire(
        "Không thể hủy!",
        "Đơn hàng đã được giao hoặc đang giao.",
        "info"
      );
      return;
    }

    const confirm = await Swal.fire({
      title: "Xác nhận hủy đơn?",
      text: `Bạn có chắc muốn hủy đơn ${order.id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Xác nhận hủy",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      setOrders((prev) =>
        prev.map((o) => (o.id === order.id ? { ...o, status: "Đã hủy" } : o))
      );
      Swal.fire("Đã hủy đơn!", "Đơn hàng đã được cập nhật.", "success");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Quản lý đơn hàng
      </h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-pink-100 text-pink-700">
          <tr>
            <th className="p-3 text-left">Mã đơn</th>
            <th className="p-3">Khách hàng</th>
            <th className="p-3">Tổng tiền</th>
            <th className="p-3">Trạng thái</th>
            <th className="p-3 text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i} className="border-b hover:bg-pink-50 transition">
              <td className="p-3 font-medium">{o.id}</td>
              <td className="p-3 text-center">{o.user}</td>
              <td className="p-3 text-center">{o.total.toLocaleString()}đ</td>
              <td
                className={`p-3 text-center font-medium ${
                  o.status === "Đã giao"
                    ? "text-green-600"
                    : o.status === "Đang giao"
                    ? "text-blue-500"
                    : o.status === "Đã hủy"
                    ? "text-red-500"
                    : "text-gray-700"
                }`}
              >
                {o.status}
              </td>
              <td className="p-3 text-center space-x-3 text-sm">
                <button
                  onClick={() => handleViewDetails(o)}
                  className="text-blue-500 hover:underline"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => handleUpdateStatus(o)}
                  className="text-pink-500 hover:underline"
                >
                  Cập nhật
                </button>
                <button
                  onClick={() => handleCancel(o)}
                  className="text-red-500 hover:underline"
                >
                  Hủy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
