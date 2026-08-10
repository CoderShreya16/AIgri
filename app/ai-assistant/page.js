"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Input, Loader } from "../../components/ui";
import { toast } from "react-hot-toast";
import ReactMarkdown from 'react-markdown';

export default function AIAssistant() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    cropName: "",
    season: "",
    symptoms: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cropName || !formData.season || !formData.symptoms) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    setAdvice(null);

    try {
      const res = await fetch(`http://localhost:5000/api/ai/crop-advisor`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to generate AI advice");
      }

      setAdvice(data.advice);
      toast.success("Analysis complete!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 dark:text-green-400 mb-4 tracking-tight">
            AI Crop Advisor 🌿
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Describe your crop's condition and let our AI analyze it to provide expert recommendations.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700/50 mb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Crop Name"
                name="cropName"
                placeholder="e.g. Rice, Wheat, Tomato"
                value={formData.cropName}
                onChange={handleInputChange}
              />
              <Input
                label="Season"
                name="season"
                placeholder="e.g. Kharif, Rabi, Summer"
                value={formData.season}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Symptoms
              </label>
              <textarea
                name="symptoms"
                rows="4"
                placeholder="Describe what's wrong (e.g. Leaves turning yellow, brown spots)..."
                value={formData.symptoms}
                onChange={handleInputChange}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-lg"
            >
              {loading ? "Analyzing your crop..." : "Get AI Advice"}
            </Button>
          </form>
        </div>

        {loading && (
          <div className="my-10 text-center">
            <Loader />
            <p className="text-gray-500 dark:text-gray-400 mt-4 animate-pulse">Analyzing your crop and generating insights...</p>
          </div>
        )}

        {advice && !loading && (
          <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-3xl shadow-xl border border-green-100 dark:border-green-900/30">
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 border-b border-green-200 dark:border-green-800 pb-4">
              AI Analysis Results
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{advice.replace(/\\n/g, '\n')}</ReactMarkdown>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
