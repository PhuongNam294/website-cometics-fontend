import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/user/Layout";

const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập | BeautyGlow";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <Layout>
      <main className="min-h-screen flex items-center justify-center font-sans">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Đăng nhập
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Chào mừng quay lại với{" "}
            <span className="text-pink-500">BeautyGlow</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                {...register("email", {
                  required: "Vui lòng nhập email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email không hợp lệ",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "focus:ring-pink-400"
                } focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải ít nhất 6 ký tự",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.password
                    ? "border-red-400 focus:ring-red-400"
                    : "focus:ring-pink-400"
                } focus:outline-none`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-pink-500" />
                Ghi nhớ đăng nhập
              </label>
              <a href="#" className="text-pink-500 hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-2.5 rounded-lg font-semibold hover:from-rose-400 hover:to-pink-500 transition"
            >
              Đăng nhập
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-500">
            Chưa có tài khoản?{" "}
            <a
              href="/register"
              className="text-pink-500 font-medium hover:underline"
            >
              Đăng ký ngay
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
