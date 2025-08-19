import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy
    const dummyEmail = "test@user.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      setIsAuth(true);
      setError("");
      setSuccess(true);

      // Reset form
      setEmail("");
      setPassword("");

      // 3 second baad message hide aur redirect home
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 1000);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {success ? (
        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          Login Successful!
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg mt-2 font-semibold transition-all duration-200"
          >
            Login
          </button>
        </form>
      )}

      <div className="pt-4 text-gray-300">
        <p>Dummy Email: test@user.com</p>
        <p>Dummy Password: 123456</p>
      </div>
    </div>
  );
};

export default Login;
