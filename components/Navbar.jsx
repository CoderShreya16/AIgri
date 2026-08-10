"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-700/95 dark:bg-gray-900/95 backdrop-blur-md text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">

        <Link href="/">
          <h1 className="text-3xl font-bold cursor-pointer tracking-tight hover:opacity-90 transition-opacity">
            AIgri 🌱
          </h1>
        </Link>

        <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-yellow-300 transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-yellow-300">
              About
            </Link>
          </li>

          <li>
            <Link href="/dashboard" className="hover:text-yellow-300 transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-yellow-300">
              Dashboard
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="hover:text-yellow-300 transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-yellow-300 cursor-pointer">
                Logout
              </button>
            ) : (
              <Link href="/login" className="hover:text-yellow-300 transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-yellow-300">
                Login
              </Link>
            )}
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full transition-all duration-200 text-lg"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {isLoggedIn && (
            <Link href="/profile">
              <button
                aria-label="User profile"
                className="cursor-pointer bg-white text-green-700 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
              >
                👤
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}