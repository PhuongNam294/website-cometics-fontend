import React, { useEffect } from "react";
import Layout from "../../../components/user/Layout";

const Account = () => {
  useEffect(() => {
    document.title = "Quản lý tài khoản | BeautyGlow";
  }, []);
  return (
    <Layout>
      <main className="min-h-screen py-12 font-sans">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Quản lý tài khoản
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sidebar */}
            <aside className="bg-pink-50 rounded-xl p-4 space-y-3 text-sm">
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-pink-100 text-pink-600 font-medium"
              >
                Thông tin cá nhân
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-pink-100 text-gray-700"
              >
                Đơn hàng của tôi
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-pink-100 text-gray-700"
              >
                Đổi mật khẩu
              </a>
              <a
                href="/logout"
                className="block px-3 py-2 rounded-lg hover:bg-rose-100 text-rose-500"
              >
                Đăng xuất
              </a>
            </aside>

            {/* Main Info */}
            <section className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Thông tin cá nhân</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      defaultValue="Nguyễn Ngọc Anh"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="ngocanh@gmail.com"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      defaultValue="0934 123 456"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      defaultValue="38 Trần Việt Châu, TP. Cần Thơ"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-lg font-semibold hover:from-rose-400 hover:to-pink-500 transition"
                >
                  Lưu thay đổi
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Account;
