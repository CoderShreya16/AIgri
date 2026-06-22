import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50/10 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full">

        {/* Welcome Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-800 to-green-600 dark:from-green-950 dark:to-green-800 rounded-3xl text-white p-8 md:p-10 shadow-lg border border-green-700/20 dark:border-green-900/30">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Welcome Back, Farmer 👋
          </h1>

          <p className="mt-3 text-base md:text-lg text-green-100/90 dark:text-gray-300 max-w-xl">
            Here's your farm overview powered by AgriAI.
          </p>

          <button className="mt-6 bg-white dark:bg-gray-100 text-green-800 font-semibold px-6 py-3 rounded-xl hover:scale-105 active:scale-95 hover:shadow-lg transition cursor-pointer">
            Scan Crop Disease 🌾
          </button>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:border-green-200 dark:hover:border-green-800/40 transition-all duration-300">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Crop Health</p>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mt-2">
              92%
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:border-red-200 dark:hover:border-red-900/30 transition-all duration-300">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Diseases Detected</p>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mt-2">
              18
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-900/30 transition-all duration-300">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">AI Recommendations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mt-2">
              24
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:border-yellow-200 dark:hover:border-yellow-900/30 transition-all duration-300">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Notifications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mt-2">
              5
            </h2>
          </div>

        </section>

        {/* Middle Section */}
        <section className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-5">
              Recent AI Activity
            </h2>

            <div className="space-y-4">

              <div className="border-l-4 border-green-600 pl-4 py-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                  Tomato Leaf Analysis
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Early Blight detected with 94% confidence.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                  Soil Recommendation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Nitrogen level is low. Fertilizer suggested.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                  Weather Alert
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Heavy rainfall expected tomorrow.
                </p>
              </div>

            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-5">
              Today's Weather 🌤️
            </h2>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">28°C</span>
              <span className="text-sm text-gray-500">Sunny</span>
            </div>

            <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              Dehradun, Uttarakhand
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-50 dark:border-gray-700/40 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Humidity</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Wind</span>
                <span className="font-medium">12 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rain Chance</span>
                <span className="font-medium">30%</span>
              </div>
            </div>
          </div>

        </section>

        {/* Table */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6 mt-10 overflow-x-auto">

          <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-5">
            Recent Crop Scans
          </h2>

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700 text-left text-gray-400 dark:text-gray-500 font-semibold">
                <th className="pb-3">Crop</th>
                <th className="pb-3">Disease</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 dark:divide-gray-700/45">

              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-700/20 transition-colors">
                <td className="py-3.5 font-medium text-gray-900 dark:text-gray-100">Tomato</td>
                <td className="py-3.5 text-gray-600 dark:text-gray-400">Early Blight</td>
                <td className="py-3.5 font-semibold text-red-500">Detected</td>
                <td className="py-3.5 text-gray-500 dark:text-gray-400">21 Jun 2026</td>
              </tr>

              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-700/20 transition-colors">
                <td className="py-3.5 font-medium text-gray-900 dark:text-gray-100">Potato</td>
                <td className="py-3.5 text-gray-600 dark:text-gray-400">Healthy</td>
                <td className="py-3.5 font-semibold text-green-600 dark:text-green-400">Safe</td>
                <td className="py-3.5 text-gray-500 dark:text-gray-400">20 Jun 2026</td>
              </tr>

              <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-700/20 transition-colors">
                <td className="py-3.5 font-medium text-gray-900 dark:text-gray-100">Wheat</td>
                <td className="py-3.5 text-gray-600 dark:text-gray-400">Rust Disease</td>
                <td className="py-3.5 font-semibold text-yellow-500">Moderate</td>
                <td className="py-3.5 text-gray-500 dark:text-gray-400">19 Jun 2026</td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

      <Footer />
    </div>
  );
}