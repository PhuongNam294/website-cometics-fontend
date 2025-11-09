import React, { useEffect } from "react";
import Layout from "../../../components/user/Layout";
import { useForm } from "react-hook-form";

const Register = () => {
  useEffect(() => {
    document.title = "Đăng ký | BeautyGlow";
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  const password = watch("password");

  return (
    <Layout>
      <main className="min-h-screen flex items-center justify-center font-sans">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 mt-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Đăng ký
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Tạo tài khoản mới tại{" "}
            <span className="text-pink-500">BeautyGlow</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Họ và tên */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                {...register("fullname", {
                  required: "Vui lòng nhập họ và tên",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.fullname
                    ? "border-red-400 focus:ring-red-400"
                    : "focus:ring-pink-400"
                } focus:outline-none`}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Nhập email"
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

            {/* Mật khẩu */}
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
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
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

            {/* Xác nhận mật khẩu */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                {...register("confirmPassword", {
                  required: "Vui lòng nhập lại mật khẩu",
                  validate: (value) =>
                    value === password || "Mật khẩu không trùng khớp",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-red-400 focus:ring-red-400"
                    : "focus:ring-pink-400"
                } focus:outline-none`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-2.5 rounded-lg font-semibold hover:from-rose-400 hover:to-pink-500 transition"
            >
              Đăng ký
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-500">
            Đã có tài khoản?{" "}
            <a
              href="/login"
              className="text-pink-500 font-medium hover:underline"
            >
              Đăng nhập
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
