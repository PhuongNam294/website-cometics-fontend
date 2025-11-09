import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-rose-50 text-gray-700 mt-20 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + mô tả */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-4.5 h-4.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-pink-500">
                Beauty<span className="text-gray-900">Glow</span>
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nâng tầm vẻ đẹp tự nhiên của bạn với những sản phẩm chăm sóc da,
              trang điểm và nước hoa cao cấp.
            </p>
          </div>

          {/* Cột 2: Mua sắm */}
          <div>
            <h4 className="font-semibold text-pink-600 mb-4 text-lg">
              Mua sắm
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Tất cả sản phẩm",
                "Chăm sóc da",
                "Trang điểm",
                "Nước hoa",
                "Phụ kiện",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Thông tin */}
          <div>
            <h4 className="font-semibold text-pink-600 mb-4 text-lg">
              Thông tin
            </h4>
            <ul className="space-y-2 text-sm">
              {["Về chúng tôi", "Bài viết", "Tuyển dụng", "Liên hệ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Cột 4: Mạng xã hội */}
          <div>
            <h4 className="font-semibold text-pink-600 mb-4 text-lg">
              Kết nối
            </h4>
            <div className="flex space-x-4 text-gray-500">
              <a
                href="#"
                className="p-2 bg-white border border-pink-100 rounded-full hover:scale-110 hover:text-pink-500 shadow-sm transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-pink-100 rounded-full hover:scale-110 hover:text-pink-500 shadow-sm transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-pink-100 rounded-full hover:scale-110 hover:text-pink-500 shadow-sm transition"
              >
                <Twitter size={18} />
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Email:{" "}
              <a
                href="mailto:support@beautyglow.vn"
                className="text-pink-500 hover:underline"
              >
                support@beautyglow.vn
              </a>
            </p>
            <p className="text-sm text-gray-500">Hotline: 0909 888 777</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-pink-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 BeautyGlow. Tất cả quyền được bảo lưu.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
