"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700/50 overflow-hidden grid lg:grid-cols-2">

          {/* Left Side Image Section */}
          <div className="relative hidden lg:block">
            <img
              src="/login-hero.jpg"
              alt="Smart Farming"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-green-950/70 dark:bg-black/75 flex flex-col justify-end p-10 text-white">
              <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
                Welcome to AIgri 🌾
              </h1>

              <p className="text-green-100/90 dark:text-gray-300 leading-relaxed text-base">
                Harness the power of Artificial Intelligence to
                detect crop diseases, receive recommendations,
                and improve farming productivity.
              </p>
            </div>
          </div>

          {/* Right Side Login Form */}
          <div className="p-8 md:p-14 flex flex-col justify-center">

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 dark:text-green-400 mb-2 tracking-tight">
                Sign In
              </h2>

              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Continue your smart farming journey.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="farmer@example.com"
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all text-base"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input type="checkbox" className="rounded text-green-700 focus:ring-green-600 cursor-pointer" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-green-700 dark:text-green-400 font-medium hover:underline hover:text-green-800 dark:hover:text-green-300 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 dark:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-800 dark:hover:bg-green-500 transition-all active:scale-[0.99] shadow-lg shadow-green-700/10 cursor-pointer"
              >
                Login
              </button>

            </form>

            <div className="mt-8 text-center text-sm md:text-base">
              <p className="text-gray-600 dark:text-gray-400">
                New to AIgri?
                <span className="text-green-700 dark:text-green-400 font-semibold cursor-pointer ml-2 hover:underline">
                  Create an account
                </span>
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}