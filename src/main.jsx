import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import LoginPage from "./pages/LoginPage/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import Products from "./pages/Products/index.jsx";
import MyOrders from "./pages/MyOrders/index.jsx";

import "./assets/css/nullstyle.css";
import "./assets/css/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context } from "./utils/Context.jsx";

import Header from "./components/Header/index.jsx";
import Footer from "./components/footer/index.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Context>
  </BrowserRouter>
);
