import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/user/Home";
import Login from "./pages/user/auth/Login";
import Register from "./pages/user/auth/Register";
import Account from "./pages/user/auth/Account";
import ProductDetail from "./pages/user/ProductDetail";
import Cart from "./pages/user/Cart";
import Wishlist from "./pages/user/Wishlist";
import Checkout from "./pages/user/Checkout";
import PaymentSuccess from "./pages/user/PaymentSuccess";
import Promotions from "./pages/user/Promotions";
import Contact from "./pages/user/Contact";
import Guide from "./pages/user/Guide";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageUsers from "./pages/admin/ManageUsers";
import ManagePromotions from "./pages/admin/ManagePromotions";
import ManageOrders from "./pages/admin/ManageOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="discounts" element={<ManagePromotions />} />
          <Route path="orders" element={<ManageOrders />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex flex-col justify-center items-center min-h-screen bg-pink-50 text-center px-6">
              <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Trang không tồn tại
              </h2>
              <p className="text-gray-500 mb-6">
                Có vẻ như bạn đã đi lạc. Hãy quay lại trang chủ nhé 💖
              </p>
              <a
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold hover:from-rose-400 hover:to-pink-500 transition"
              >
                Quay lại trang chủ
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
