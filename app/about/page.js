
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-green-50/20 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-green-900 dark:text-green-400 mb-6">
          About AIgri 🌱
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          AIgri empowers farmers with AI-driven insights for smarter, more sustainable, and high-yielding farming decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center gap-2">
              <span>🌾</span> Smart Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Receive tailored crop suggestions optimized specifically for your local soil type, nutrients, and environmental conditions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center gap-2">
              <span>📸</span> Disease Detection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Upload real-time crop images to detect issues, receive fast diagnostic reports, and get treatment recommendation lists instantly.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center gap-2">
              <span>🎤</span> Voice Support
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Break language barriers by interacting directly with the platform using natural voice commands in local, regional languages.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}