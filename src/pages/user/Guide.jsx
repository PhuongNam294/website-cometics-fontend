import React, { useEffect } from "react";
import Layout from "../../components/user/Layout";

const Guide = () => {
  useEffect(() => {
    document.title = "Hướng dẫn | BeautyGlow";
  }, []);
  return (
    <Layout>
      <main className="min-h-screen font-sans  py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
            🌸 Hướng dẫn mua hàng
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1️⃣ Cách đặt hàng
              </h2>
              <p>
                • Truy cập trang <strong>Sản phẩm</strong> để xem các mặt hàng.
                <br />• Chọn sản phẩm yêu thích → Nhấn{" "}
                <strong>“Thêm vào giỏ”</strong>.
                <br />• Khi đã sẵn sàng, nhấn vào biểu tượng giỏ hàng và chọn{" "}
                <strong>“Thanh toán”</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2️⃣ Cách thanh toán
              </h2>
              <p>
                BeautyGlow hiện hỗ trợ thanh toán trực tuyến qua{" "}
                <strong>VNPAY</strong> và thanh toán khi nhận hàng (COD).
                <br />
                Với đơn hàng trên <strong>500.000đ</strong>, bạn sẽ được{" "}
                <span className="text-pink-500 font-semibold">
                  miễn phí vận chuyển
                </span>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3️⃣ Chính sách đổi trả
              </h2>
              <p>
                Sản phẩm được đổi trả trong vòng 7 ngày nếu còn nguyên tem, hộp
                và chưa qua sử dụng.
                <br />
                Vui lòng liên hệ với chúng tôi để được hỗ trợ đổi trả nhanh
                nhất.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4️⃣ Hỗ trợ khách hàng
              </h2>
              <p>
                Nếu bạn gặp bất kỳ vấn đề nào trong quá trình mua hàng, hãy liên
                hệ qua mục{" "}
                <a href="/contact" className="text-pink-500 hover:underline">
                  Liên hệ
                </a>{" "}
                để được tư vấn miễn phí.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Guide;
