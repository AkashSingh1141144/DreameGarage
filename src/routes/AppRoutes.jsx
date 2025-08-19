import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Home from "../pages/Home";

// Lazy loading
const About = lazy(() => import("../pages/About"));
const Cart = lazy(() => import("../pages/Cart"));
const Auth = lazy(() => import("../pages/Auth"));
const Shop = lazy(() => import("../pages/Shop"));
const Login = lazy(() => import("../pages/Login"));

const AppRoutes = ({ isAuth, setIsAuth }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-xl font-bold text-sky-600">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart isAuth={isAuth} />} />
        <Route path="/auth" element={<Auth setIsAuth={setIsAuth} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
