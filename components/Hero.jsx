export default function Hero() {
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
          className="w-full p-3 outline-none text-gray-700 dark:text-gray-100 bg-transparent dark:placeholder-gray-400 focus:ring-0 text-base"
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

          <button className="bg-green-700 dark:bg-green-600 text-white font-medium px-6 py-2 rounded-xl hover:bg-green-800 dark:hover:bg-green-500 hover:shadow-lg hover:shadow-green-700/10 active:scale-[0.98] transition-all cursor-pointer">
            Send
          </button>
        </div>

      </div>

    </section>
  );
}