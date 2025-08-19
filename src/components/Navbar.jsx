import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { clearCartOnLogout } from "../features/cart/cartSlice";

const Navbar = ({ isAuth, setIsAuth }) => {
  // ← receive auth from App
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);

  const toggleAuth = () => {
    if (isAuth) {
      setIsAuth(false); // Logout
      dispatch(clearCartOnLogout());
      navigate("/");
    } else {
      navigate("/login"); // Go to login form
    }
  };

  // Scroll detection kr rhe hai navbar ko blure krne ke liye
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const handleCartClick = (e) => {
    if (!isAuth) {
      e.preventDefault();
      alert("Please login first!");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          DreamGarage
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-sky-400 font-semibold"
                    : "hover:text-sky-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Cart */}
          <li>
            <Link
              to={isAuth ? "/cart" : "#"}
              onClick={handleCartClick}
              className="relative flex items-center gap-2 hover:text-sky-400"
            >
              <FaShoppingCart />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          {/* Auth Button */}
          <li>
            <button
              onClick={toggleAuth}
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg"
            >
              <FaUser />
              {isAuth ? "Logout" : "Login"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-lg mt-4 rounded-lg overflow-hidden text-white"
          >
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block ${
                      location.pathname === link.path
                        ? "text-sky-400 font-semibold"
                        : "hover:text-sky-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Cart */}
              <li>
                <Link
                  to={isAuth ? "/cart" : "#"}
                  onClick={(e) => {
                    handleCartClick(e);
                    setMenuOpen(false);
                  }}
                  className="relative flex items-center gap-2 hover:text-sky-400"
                >
                  <FaShoppingCart />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>

              {/* Auth Button */}
              <li>
                <button
                  onClick={() => {
                    toggleAuth();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg w-full"
                >
                  <FaUser />
                  {isAuth ? "Logout" : "Login"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
