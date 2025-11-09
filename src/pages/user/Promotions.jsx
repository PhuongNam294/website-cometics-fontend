import React, { useEffect } from "react";
import Layout from "../../components/user/Layout";

const Promotions = () => {
  useEffect(() => {
    document.title = "Ưu đãi | BeautyGlow";
  }, []);
  const promotions = [
    {
      id: 1,
      title: "🎁 Giảm 30% cho đơn hàng đầu tiên",
      desc: "Đăng ký tài khoản BeautyGlow và nhận ngay ưu đãi 30% cho đơn hàng đầu tiên.",
      code: "NEW30",
      expiry: "31/12/2025",
    },
    {
      id: 2,
      title: "💄 Mua 2 tặng 1 – Dành cho dòng son Matte Luxe",
      desc: "Thỏa sức chọn màu yêu thích, chỉ cần mua 2 sản phẩm bạn sẽ được tặng thêm 1.",
      code: "MATTELOVE",
      expiry: "15/12/2025",
    },
    {
      id: 3,
      title: "🌸 Freeship toàn quốc cho đơn hàng từ 500.000đ",
      desc: "Áp dụng cho tất cả các sản phẩm trong tháng 11.",
      code: "FREESHIP",
      expiry: "30/11/2025",
    },
  ];

  return (
    <Layout>
      <main className="min-h-screen font-sans py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
            🎀 Ưu đãi & Khuyến mãi
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-gradient-to-b from-rose-50 to-white border border-pink-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {promo.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{promo.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                    Mã: {promo.code}
                  </span>
                  <span className="text-gray-400 text-sm">
                    HSD: {promo.expiry}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/product"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition"
            >
              Mua sắm ngay
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Promotions;
