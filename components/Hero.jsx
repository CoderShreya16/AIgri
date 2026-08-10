"use client";

import { useState } from "react";
import { Loader } from "./ui";
import ReactMarkdown from 'react-markdown';

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to get response");
      }

      setResponse(data.advice);
      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white dark:from-gray-950 dark:to-gray-900 min-h-[75vh] flex flex-col justify-center items-center text-center px-6 py-12">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-200/30 dark:bg-green-900/10 rounded-full blur-3xl pointer-events-none" />

      <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-tight text-green-900 dark:text-green-400 mb-6 max-w-4xl">
        Smart Farming <span className="text-green-700 dark:text-green-300">Starts Here</span> 🌾
      </h1>

      <p className="relative text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed font-normal">
        AIgri helps farmers make informed decisions using
        Artificial Intelligence. Detect crop diseases, get
        crop recommendations, and interact through voice or chat.
      </p>

      {/* Chat Input Box */}
      <div className="relative bg-white dark:bg-gray-800 shadow-xl shadow-green-900/5 dark:shadow-black/20 rounded-2xl p-4 w-full max-w-2xl border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:border-green-300 dark:hover:border-green-800/80">
        <input
          type="text"
          placeholder="Ask AIgri anything about your crops..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 outline-none text-gray-700 dark:text-gray-100 bg-transparent dark:placeholder-gray-400 focus:ring-0 text-base"
          disabled={loading}
        />

        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50 dark:border-gray-700/30">
          <div className="flex gap-4 text-2xl">
            <button className="hover:scale-110 transition cursor-pointer p-1" aria-label="Upload image">
              📷
            </button>

            <button className="hover:scale-110 transition cursor-pointer p-1" aria-label="Voice input">
              🎤
            </button>
          </div>

          <button 
            onClick={handleSend}
            disabled={loading || !prompt.trim()}
            className="bg-green-700 dark:bg-green-600 text-white font-medium px-6 py-2 rounded-xl hover:bg-green-800 dark:hover:bg-green-500 hover:shadow-lg hover:shadow-green-700/10 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="mt-8 relative w-full max-w-2xl text-center flex flex-col items-center">
          <Loader />
          <p className="text-gray-500 dark:text-gray-400 mt-4 animate-pulse">Thinking...</p>
        </div>
      )}

      {/* Chat Response Area */}
      {response && !loading && (
        <div className="mt-8 relative bg-green-50 dark:bg-gray-800/80 rounded-2xl p-6 w-full max-w-2xl border border-green-100 dark:border-green-900/30 shadow-lg text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start gap-4">
            <div className="text-3xl mt-1">🤖</div>
            <div className="prose dark:prose-invert prose-green max-w-none w-full">
              <ReactMarkdown>{response.replace(/\\n/g, '\n')}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="mt-8 relative bg-red-50 dark:bg-red-900/20 rounded-2xl p-4 w-full max-w-2xl border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-left">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

    </section>
  );
}