import React, { useEffect, useState } from "react";
import Layout from "../../components/user/Layout";
import productImage from "../../assets/images/son.jpg";
import productImage1 from "../../assets/images/son1.png";
import productImage2 from "../../assets/images/son2.png";
import productImage3 from "../../assets/images/son3.png";

const ProductDetail = () => {
  useEffect(() => {
    document.title = "Chi tiết sản phẩm | BeautyGlow";
  }, []);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(productImage);

  const galleryImages = [
    productImage,
    productImage1,
    productImage2,
    productImage3,
  ];

  return (
    <Layout>
      <main className="bg-white font-sans text-gray-800">
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Sản phẩm chính"
                className="rounded-2xl shadow-md w-full max-w-md h-[400px] object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Preview ${i}`}
                  className={`w-20 h-20 rounded-xl object-cover border-2 cursor-pointer transition-transform duration-200 ${
                    selectedImage === img
                      ? "border-pink-500 scale-105"
                      : "border-transparent hover:border-pink-300 hover:scale-105"
                  }`}
                  onMouseEnter={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              Son môi BeautyGlow Matte Luxe
            </h1>
            <p className="text-pink-500 text-xl font-semibold mb-4">350.000đ</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dòng son lì cao cấp BeautyGlow Matte Luxe với chiết xuất thiên
              nhiên, giúp đôi môi mềm mượt, bền màu suốt cả ngày mà không khô
              môi.
            </p>

            <div className="flex items-center space-x-3 mb-6">
              <span className="font-medium">Số lượng:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-pink-500 hover:text-pink-600 text-lg"
                >
                  −
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-pink-500 hover:text-pink-600 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition">
                Thêm vào giỏ hàng
              </button>
              <button className="flex-1 border border-pink-400 text-pink-500 py-3 rounded-full font-semibold hover:bg-pink-50 transition">
                Mua ngay
              </button>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="border-b flex justify-center space-x-8 mb-8">
            {[
              { id: "description", label: "Mô tả sản phẩm" },
              { id: "reviews", label: "Đánh giá (3)" },
              { id: "shipping", label: "Chính sách vận chuyển" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 font-medium border-b-2 transition ${
                  activeTab === tab.id
                    ? "border-pink-500 text-pink-500"
                    : "border-transparent text-gray-600 hover:text-pink-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <div className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                Son BeautyGlow Matte Luxe mang đến cho bạn trải nghiệm son lì
                mịn môi với công thức chứa dầu dưỡng tự nhiên. Màu sắc bền lâu,
                dễ tán, không lem, và giúp môi luôn mềm mịn trong nhiều giờ
                liền.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 shadow-sm hover:shadow transition"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={`https://randomuser.me/api/portraits/women/${
                        i + 25
                      }.jpg`}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Ngọc Anh</p>
                      <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Màu son rất đẹp, mềm môi, giao hàng nhanh, đóng gói cực kỳ
                    cẩn thận!
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên.</li>
                <li>
                  Thời gian giao hàng: 2–4 ngày (nội thành), 3–7 ngày (ngoại
                  tỉnh).
                </li>
                <li>
                  Đổi trả trong vòng 7 ngày nếu sản phẩm lỗi hoặc không đúng mô
                  tả.
                </li>
              </ul>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default ProductDetail;
