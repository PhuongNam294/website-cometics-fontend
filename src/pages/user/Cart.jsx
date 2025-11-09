import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/user/Layout";
import productImage from "../../assets/images/son.jpg";
import productImage2 from "../../assets/images/nuoc-hoa.jpg";
const Cart = () => {
  useEffect(() => {
    document.title = "Giỏ hàng | BeautyGlow";
  }, []);
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Son môi BeautyGlow Matte Luxe",
      price: 350000,
      quantity: 1,
      image: productImage,
    },
    {
      id: 2,
      name: "Nước hoa Pháp cho phái nữ sành điệu",
      price: 420000,
      quantity: 2,
      image: productImage2,
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <main className="font-sans min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Giỏ hàng của bạn
          </h1>

          {cart.length === 0 ? (
            <p className="text-center text-gray-600">
              Giỏ hàng trống. Hãy thêm sản phẩm ngay nhé!
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b pb-6 last:border-none"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-xl object-cover"
                    />
                    <div className="ml-5 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-pink-500 font-medium mt-1">
                        {item.price.toLocaleString()}đ
                      </p>
                      <div className="flex items-center mt-3 space-x-4">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, "decrease")
                            }
                            className="px-3 py-1 text-pink-500 hover:text-pink-600 text-lg"
                          >
                            −
                          </button>
                          <span className="px-4 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, "increase")
                            }
                            className="px-3 py-1 text-pink-500 hover:text-pink-600 text-lg"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-gray-400 hover:text-red-500 text-sm"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-pink-50 rounded-2xl p-6 shadow-inner h-fit">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Tóm tắt đơn hàng
                </h2>
                <div className="flex justify-between mb-2 text-gray-700">
                  <span>Tạm tính</span>
                  <span>{total.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between mb-4 text-gray-700">
                  <span>Phí vận chuyển</span>
                  <span>Miễn phí</span>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
                  <span>Tổng cộng</span>
                  <span>{total.toLocaleString()}đ</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition"
                >
                  Thanh toán
                </button>
                <a
                  href="/"
                  className="block text-center mt-4 text-pink-500 hover:underline"
                >
                  ← Tiếp tục mua sắm
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
