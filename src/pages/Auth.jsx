import React from "react";

const Auth = ({ setIsAuth }) => {
  const handleLogin = () => {
    setIsAuth(true); // Navbar me isAuth update hoga
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Auth;
