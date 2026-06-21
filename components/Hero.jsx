export default function Hero() {
  return (
    <section className="bg-green-50 min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
        
        Smart Farming Starts Here 🌾
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        AgriAI helps farmers make informed decisions using
        Artificial Intelligence. Detect crop diseases, get
        crop recommendations, and interact through voice or chat.
      </p>

      <button className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition">
        Get Started
      </button>

    </section>
  );
}