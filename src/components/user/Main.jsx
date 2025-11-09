import React from "react";
import productImage from "../../assets/images/bg.jpg";
import sonImage from "../../assets/images/son.jpg";
import trangDiemImage from "../../assets/images/trang-diem.jpg";
import nuocHoaImage from "../../assets/images/nuoc-hoa.jpg";
import chamSocDaImage from "../../assets/images/cham-soc-da.jpg";
import bestSelling from "../../assets/images/sua-tam.jpg";
const Main = () => {
  return (
    <main className="font-sans text-gray-800">
      <section className="relative bg-gradient-to-r from-pink-50 via-rose-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Tỏa sáng cùng{" "}
              <span className="text-pink-500">vẻ đẹp tự nhiên</span> của bạn
            </h1>
            <p className="text-gray-600 text-lg">
              Khám phá các dòng sản phẩm làm đẹp cao cấp, giúp bạn tự tin và
              rạng rỡ mỗi ngày.
            </p>
            <div>
              <a
                href="/products"
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-full hover:from-rose-400 hover:to-pink-500 transition"
              >
                Mua ngay
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={productImage}
              alt="Beauty Model"
              className="rounded-3xl shadow-lg w-full max-w-md h-[200px]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Danh mục nổi bật
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Son môi",
              img: sonImage,
            },
            {
              name: "Trang điểm",
              img: trangDiemImage,
            },
            {
              name: "Nước hoa",
              img: nuocHoaImage,
            },
            {
              name: "Chăm sóc da",
              img: chamSocDaImage,
            },
          ].map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl overflow-hidden shadow-md group relative cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>
              <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Sản phẩm bán chạy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={bestSelling}
                  alt="product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800">Sản phẩm {i}</h3>
                  <p className="text-pink-500 font-semibold mt-1">350.000đ</p>
                  <a
                    href="/product"
                    className="inline-block mt-3 px-4 py-2 text-sm rounded-full border border-pink-400 text-pink-500 hover:bg-pink-500 hover:text-white transition"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative my-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-md">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                🎁 Giảm 30% cho đơn hàng đầu tiên!
              </h3>
              <p className="text-sm text-pink-100">
                Áp dụng cho khách hàng mới khi đăng ký tài khoản BeautyGlow.
              </p>
            </div>
            <a
              href="/register"
              className="mt-4 md:mt-0 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Khách hàng nói gì về chúng tôi
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition"
            >
              <img
                src={`https://randomuser.me/api/portraits/women/${20 + i}.jpg`}
                alt="avatar"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">
                “Sản phẩm rất tuyệt vời, giao hàng nhanh, đóng gói cẩn thận!”
              </p>
              <div className="mt-3 text-pink-500 font-semibold">Phương Vy</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ Newsletter */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-400 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Đăng ký nhận ưu đãi</h2>
        <p className="text-pink-100 mb-8">
          Nhận thông tin khuyến mãi và sản phẩm mới nhất từ BeautyGlow
        </p>
        <form className="max-w-md mx-auto flex bg-white rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            className="flex-1 px-4 py-3 text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="px-6 bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Gửi
          </button>
        </form>
      </section>
    </main>
  );
};

export default Main;
