import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  // Dữ liệu mẫu (sau này thay bằng API GET)
  const [products, setProducts] = useState([
    { id: 1, name: "Son Matte Luxe", price: 350000, stock: 50 },
    { id: 2, name: "Kem dưỡng ban đêm", price: 420000, stock: 30 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    stock: "",
  });

  // 👉 Mở form thêm mới
  const handleAddClick = () => {
    setEditMode(false);
    setFormData({ id: null, name: "", price: "", stock: "" });
    setShowForm(true);
  };

  // 👉 Mở form sửa
  const handleEditClick = (product) => {
    setEditMode(true);
    setFormData(product);
    setShowForm(true);
  };

  // 👉 Submit form (thêm hoặc sửa)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) {
      Swal.fire(
        "Thiếu thông tin!",
        "Vui lòng nhập đủ tên và giá sản phẩm.",
        "warning"
      );
      return;
    }

    if (editMode) {
      // Giả lập PUT API
      setProducts((prev) =>
        prev.map((p) =>
          p.id === formData.id
            ? { ...formData, price: +formData.price, stock: +formData.stock }
            : p
        )
      );
      Swal.fire(
        "Cập nhật thành công!",
        "Sản phẩm đã được chỉnh sửa.",
        "success"
      );
    } else {
      // Giả lập POST API
      setProducts((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...formData,
          price: +formData.price,
          stock: +formData.stock || 0,
        },
      ]);
      Swal.fire("Thêm thành công!", "Sản phẩm mới đã được thêm.", "success");
    }

    setShowForm(false);
    setFormData({ id: null, name: "", price: "", stock: "" });
  };

  // 👉 Xóa sản phẩm (với SweetAlert)
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      Swal.fire("Đã xóa!", "Sản phẩm đã bị xóa thành công.", "success");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý sản phẩm</h1>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-5 py-2 rounded-full font-medium hover:from-rose-400 hover:to-pink-500 transition"
        >
          + Thêm sản phẩm
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-xl mb-6 grid md:grid-cols-3 gap-4 animate-fadeIn"
        >
          <input
            type="text"
            placeholder="Tên sản phẩm"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Giá (VNĐ)"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Tồn kho"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
          />

          <div className="flex gap-3 col-span-full">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              {editMode ? "Cập nhật" : "Thêm mới"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Hủy
            </button>
          </div>
        </form>
      )}

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-pink-100 text-pink-700">
          <tr>
            <th className="p-3 text-left">Tên sản phẩm</th>
            <th className="p-3 text-center">Giá</th>
            <th className="p-3 text-center">Tồn kho</th>
            <th className="p-3 text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b hover:bg-pink-50 transition">
              <td className="p-3">{p.name}</td>
              <td className="p-3 text-center">{p.price.toLocaleString()}đ</td>
              <td className="p-3 text-center">{p.stock}</td>
              <td className="p-3 text-center space-x-3">
                <button
                  onClick={() => handleEditClick(p)}
                  className="text-blue-500 hover:underline"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-500 hover:underline"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
