import React, { useEffect, useState } from "react";
import Layout from "../../components/user/Layout";
import productImage from "../../assets/images/son.jpg";
import productImage2 from "../../assets/images/nuoc-hoa.jpg";
const Wishlist = () => {
  useEffect(() => {
    document.title = "Yêu thích | BeautyGlow";
  }, []);
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Son môi BeautyGlow Matte Luxe",
      price: 350000,
      image: productImage,
    },
    {
      id: 2,
      name: "Nước hoa Pháp cho phái nữ sành điệu",
      price: 420000,
      image: productImage2,
    },
  ]);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <main className="font-sans min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Danh sách yêu thích
          </h1>

          {wishlist.length === 0 ? (
            <p className="text-center text-gray-600">
              Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition relative group"
                >
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-pink-500 font-semibold mt-1">
                      {item.price.toLocaleString()}đ
                    </p>
                    <div className="mt-3 space-x-2">
                      <a
                        href="/product"
                        className="inline-block px-4 py-2 text-sm border border-pink-400 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition"
                      >
                        Xem chi tiết
                      </a>
                      <button className="inline-block px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full hover:from-rose-400 hover:to-pink-500 transition">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Wishlist;
