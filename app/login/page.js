"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check for token in URL or error
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    const urlError = params.get("error");
    
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      router.push("/dashboard");
    }
    if (urlError) {
      setError(urlError);
    }
  }, [router]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    
    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin ? { email: formData.email, password: formData.password } : formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || (data.errors && data.errors[0]?.msg) || "Authentication failed");
      }

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
                {isLogin ? "Sign In" : "Sign Up"}
              </h2>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                {isLogin ? "Continue your smart farming journey." : "Join us to start your smart farming journey."}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all text-base"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="farmer@example.com"
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all text-base"
                />
              </div>

              {isLogin && (
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
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 dark:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-800 dark:hover:bg-green-500 transition-all active:scale-[0.99] shadow-lg shadow-green-700/10 cursor-pointer disabled:opacity-70"
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Register"}
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-gray-500 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </form>

            <div className="mt-8 text-center text-sm md:text-base">
              <p className="text-gray-600 dark:text-gray-400">
                {isLogin ? "New to AIgri?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-green-700 dark:text-green-400 font-semibold cursor-pointer ml-2 hover:underline"
                >
                  {isLogin ? "Create an account" : "Sign in here"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}