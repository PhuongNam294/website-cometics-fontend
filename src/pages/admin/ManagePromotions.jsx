import React, { useState } from "react";
import Swal from "sweetalert2";

const ManagePromotions = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      code: "NEW30",
      desc: "Giảm 30% cho đơn đầu tiên",
      expiry: "2025-12-31",
      discount: 30,
    },
    {
      id: 2,
      code: "MATTELOVE",
      desc: "Mua 2 tặng 1 son",
      expiry: "2025-12-15",
      discount: 0,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    code: "",
    desc: "",
    expiry: "",
    discount: "",
  });

  // 👉 Mở form thêm
  const handleAddClick = () => {
    setEditMode(false);
    setFormData({ id: null, code: "", desc: "", expiry: "", discount: "" });
    setShowForm(true);
  };

  // 👉 Mở form sửa
  const handleEdit = (promo) => {
    setEditMode(true);
    setFormData(promo);
    setShowForm(true);
  };

  // 👉 Submit form (Thêm / Sửa)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.code || !formData.desc || !formData.expiry) {
      Swal.fire("Thiếu thông tin!", "Vui lòng điền đầy đủ dữ liệu.", "warning");
      return;
    }

    if (editMode) {
      setPromotions((prev) =>
        prev.map((p) => (p.id === formData.id ? formData : p))
      );
      Swal.fire("Cập nhật thành công!", "Mã giảm giá đã được sửa.", "success");
    } else {
      setPromotions((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
      Swal.fire("Thêm thành công!", "Đã thêm mã giảm giá mới.", "success");
    }

    setShowForm(false);
    setFormData({ id: null, code: "", desc: "", expiry: "", discount: "" });
  };

  // 👉 Xóa giảm giá
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Xác nhận xóa?",
      text: "Mã giảm giá sẽ bị xóa vĩnh viễn.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      setPromotions((prev) => prev.filter((p) => p.id !== id));
      Swal.fire("Đã xóa!", "Mã giảm giá đã bị xóa thành công.", "success");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý giảm giá</h1>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-5 py-2 rounded-full font-medium hover:from-rose-400 hover:to-pink-500 transition"
        >
          + Thêm mã giảm giá
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-xl mb-6 grid md:grid-cols-4 gap-4 animate-fadeIn"
        >
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mô tả"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.expiry}
            onChange={(e) =>
              setFormData({ ...formData, expiry: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Giảm (%)"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
            value={formData.discount}
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
          />

          <div className="col-span-full flex gap-3">
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

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{promo.desc}</h2>
              <p className="text-gray-500 text-sm">Mã: {promo.code}</p>
              {promo.discount > 0 && (
                <p className="text-pink-500 text-sm font-medium">
                  Giảm: {promo.discount}%
                </p>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400">HSD: {promo.expiry}</span>
              <button
                onClick={() => handleEdit(promo)}
                className="text-blue-500 hover:underline"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(promo.id)}
                className="text-red-500 hover:underline"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePromotions;
