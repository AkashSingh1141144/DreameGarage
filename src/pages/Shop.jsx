import React from "react";
import { cars } from "../data/cars";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Shop = () => {
  const dispatch = useDispatch();

  const Footer = lazy(() => import("../components/Footer"));

  // Framer Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
      >
        BMW <br /> M Series Shop
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.5 }}
            whileHover={{ scale: 1.05 }} // hover animation
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-white">
              {car.title}
            </h2>
            <p className="text-gray-400">${car.price.toLocaleString()}</p>
            <motion.button
              onClick={() => dispatch(addToCart(car))}
              className="mt-4 w-full bg-sky-500 text-white px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#0284c7" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Shop;
