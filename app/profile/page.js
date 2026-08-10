"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <div className="min-h-screen flex flex-col bg-green-50/10 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50 text-center">
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">Your Profile</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to your protected profile page! 
            More features coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
