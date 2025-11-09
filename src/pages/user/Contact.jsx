import React, { useEffect } from "react";
import Layout from "../../components/user/Layout";

const Contact = () => {
  useEffect(() => {
    document.title = "Liên hệ | BeautyGlow";
  }, []);
  return (
    <Layout>
      <main className="min-h-screen font-sans py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
            💌 Liên hệ với BeautyGlow
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Thông tin liên hệ
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  📍 <strong>Địa chỉ:</strong> 123 Hoa Đào, Quận 1, TP.HCM
                </li>
                <li>
                  📞 <strong>Điện thoại:</strong>{" "}
                  <a href="tel:+84901234567" className="text-pink-500">
                    0901 234 567
                  </a>
                </li>
                <li>
                  ✉️ <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@beautyglow.vn"
                    className="text-pink-500"
                  >
                    support@beautyglow.vn
                  </a>
                </li>
                <li>
                  🕒 <strong>Thời gian làm việc:</strong> 8h00 – 21h00 (T2 - CN)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Nội dung tin nhắn..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold py-3 rounded-full hover:from-rose-400 hover:to-pink-500 transition"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
