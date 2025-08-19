import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

const Cart = ({ isAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  //  Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex flex-col py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
        >
          Welcome to DreameGarage
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-gray-500 my-4"
        ></motion.hr>
      </div>
      <div className="pt-2 px-6 max-w-7xl mx-auto min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-lg">
            {isAuth ? "Your cart is empty." : "Login to see your cart."}
          </p>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-gray-900 p-4 rounded-xl shadow-lg gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-40 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-400">
                    ${item.price.toLocaleString()} x {item.quantity} = $
                    {(item.price * item.quantity).toLocaleString()}
                  </p>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "cart/decrementQuantity",
                          payload: item.id,
                        })
                      }
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-sky-500 hover:bg-sky-600 px-3 py-1 rounded-lg"
                    >
                      +
                    </button>

                    {/* Remove Item */}
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-lg ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="text-right mt-4">
              <h2 className="text-2xl font-bold">
                Total: ${totalPrice.toLocaleString()}
              </h2>
              <button className="mt-2 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg text-white">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
