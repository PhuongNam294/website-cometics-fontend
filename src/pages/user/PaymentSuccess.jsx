import React, { useEffect } from "react";
import Layout from "../../components/user/Layout";

const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "Thanh toán thành công | BeautyGlow";
  }, []);
  return (
    <Layout>
      <main className="font-sans bg-pink-50 min-h-screen py-16 px-6 flex justify-center items-center">
        <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-10 text-center animate-fadeIn">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Thanh toán thành công
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Cảm ơn bạn đã mua sắm tại{" "}
            <span className="text-pink-500 font-semibold">BeautyGlow</span>!
            Giao dịch của bạn đã được xác nhận qua{" "}
            <span className="font-semibold text-pink-500">VNPAY</span>.
          </p>

          <div className="bg-pink-50 rounded-xl p-5 text-left mb-8">
            <p className="text-gray-700 text-sm mb-1">
              <span className="font-semibold text-gray-900">Mã đơn hàng:</span>{" "}
              #BG20251104
            </p>
            <p className="text-gray-700 text-sm mb-1">
              <span className="font-semibold text-gray-900">Số tiền:</span>{" "}
              790.000đ
            </p>
            <p className="text-gray-700 text-sm mb-1">
              <span className="font-semibold text-gray-900">Phương thức:</span>{" "}
              VNPAY
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Trạng thái:</span>{" "}
              <span className="text-green-500 font-semibold">
                Đã thanh toán
              </span>
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="/account"
              className="block w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition"
            >
              Xem đơn hàng của tôi
            </a>
            <a
              href="/"
              className="block w-full border border-pink-400 text-pink-500 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              Tiếp tục mua sắm
            </a>
          </div>

          <div className="mt-8 text-xs text-gray-400">
            Nếu có vấn đề về đơn hàng, vui lòng liên hệ{" "}
            <a href="/contact" className="text-pink-500 hover:underline">
              bộ phận hỗ trợ
            </a>{" "}
            của chúng tôi.
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PaymentSuccess;
