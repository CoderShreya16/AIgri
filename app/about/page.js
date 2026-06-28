
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white">
      <Navbar /> 

      <main className="min-h-screen bg-green-50 p-10">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-6">
          About AIgri 🌱
        </h1>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          AIgri empowers farmers with AI-driven insights for smarter farming decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">🌾 Smart Recommendations</h2>
            <p>Receive crop suggestions based on soil and environmental conditions.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">📸 Disease Detection</h2>
            <p>Upload crop images and detect diseases using AI.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">🎤 Voice Support</h2>
            <p>Interact with the platform using voice in regional languages.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}