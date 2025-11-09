import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ngọc Anh", email: "ngocanh@gmail.com", status: "active" },
    { id: 2, name: "Bảo Trân", email: "baotran@gmail.com", status: "active" },
    { id: 3, name: "Minh Tú", email: "minhtu@gmail.com", status: "locked" },
  ]);

  const handleView = (user) => {
    Swal.fire({
      title: `<span style="color:#ec4899">${user.name}</span>`,
      html: `
        <div style="text-align:left">
          <p><b>Email:</b> ${user.email}</p>
          <p><b>Trạng thái:</b> ${
            user.status === "active"
              ? '<span style="color:green">Hoạt động</span>'
              : '<span style="color:red">Đã khóa</span>'
          }</p>
        </div>
      `,
      confirmButtonText: "Đóng",
      confirmButtonColor: "#ec4899",
      background: "#fff",
    });
  };

  const handleToggleLock = async (user) => {
    const action = user.status === "active" ? "khóa" : "mở khóa";

    const confirm = await Swal.fire({
      title: `Xác nhận ${action} tài khoản?`,
      text: `Bạn có chắc muốn ${action} tài khoản của ${user.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#6b7280",
      confirmButtonText: `Xác nhận ${action}`,
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === user.id
            ? {
                ...u,
                status: u.status === "active" ? "locked" : "active",
              }
            : u
        )
      );

      Swal.fire(
        `${action.charAt(0).toUpperCase() + action.slice(1)} thành công!`,
        `Tài khoản của ${user.name} đã được ${action}.`,
        "success"
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Quản lý tài khoản
      </h1>

      <ul className="bg-white rounded-xl shadow divide-y">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-4 hover:bg-pink-50 transition"
          >
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="space-x-3 text-sm">
              <button
                onClick={() => handleView(user)}
                className="text-blue-500 hover:underline"
              >
                Chi tiết
              </button>
              <button
                onClick={() => handleToggleLock(user)}
                className={`${
                  user.status === "active" ? "text-red-500" : "text-green-500"
                } hover:underline`}
              >
                {user.status === "active" ? "Khóa" : "Mở khóa"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
