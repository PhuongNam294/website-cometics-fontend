import React, { useEffect, useState } from "react";
import Layout from "../../components/user/Layout";
import productImage from "../../assets/images/son.jpg";
import productImage2 from "../../assets/images/nuoc-hoa.jpg";
import vnpayLogo from "../../assets/images/vnpay-logo.png";

const Checkout = () => {
  useEffect(() => {
    document.title = "Thanh toán | BeautyGlow";
  }, []);
  const [cart] = useState([
    {
      id: 1,
      name: "Son môi BeautyGlow Matte Luxe",
      price: 350000,
      quantity: 1,
      image: productImage,
    },
    {
      id: 2,
      name: "Kem dưỡng BeautyGlow Soft Skin",
      price: 420000,
      quantity: 2,
      image: productImage2,
    },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "vnpay",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Thanh toán VNPAY đang được xử lý...");
  };

  return (
    <Layout>
      <main className="font-sans bg-pink-50 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Thanh toán đơn hàng
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Thông tin giao hàng
              </h2>
              <form onSubmit={handleCheckout} className="space-y-5">
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">
                    Địa chỉ giao hàng
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                  ></textarea>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
                    Phương thức thanh toán
                  </h3>
                  <div className="flex items-center space-x-3 border rounded-lg p-3 bg-pink-50 border-pink-200">
                    <input
                      type="radio"
                      name="payment"
                      value="vnpay"
                      checked={form.payment === "vnpay"}
                      onChange={handleChange}
                      className="text-pink-500 focus:ring-pink-500"
                    />
                    <img src={vnpayLogo} alt="VNPAY" className="h-6" />
                    <label className="text-gray-700 font-medium">
                      Thanh toán qua VNPAY
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">
                    Hệ thống sẽ chuyển hướng sang cổng thanh toán VNPAY để xác
                    nhận giao dịch.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition"
                >
                  Thanh toán VNPAY
                </button>
              </form>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 shadow-inner h-fit">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Đơn hàng của bạn
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        SL: {item.quantity}
                      </p>
                    </div>
                    <p className="text-gray-900 font-semibold">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Tạm tính</span>
                <span>{total.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-4">
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Tổng cộng</span>
                <span>{total.toLocaleString()}đ</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Checkout;
