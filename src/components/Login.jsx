import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "muhamadfudhail21@gmail.com" && password === "12345") {
      setIsLoggedIn(true);
      Swal.fire({
        title: "Login Berhasil",
        text: "Selamat datang kembali!",
        icon: "success",
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Login Gagal",
        text: "Email atau kata sandi salah. Silakan coba lagi.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transform transition hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Selamat Datang!
        </h2>
        <p className="text-sm text-center text-gray-600">
          Masuk untuk melanjutkan
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default LoginPage;
