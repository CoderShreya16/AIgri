// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// export default function Login() {
//   return (
//     <div>
//       <Navbar />

//       <main className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center p-6">

//         <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

//           {/* Left Section */}
//           <div className="bg-green-700 text-white p-10 flex flex-col justify-center">
//             <h1 className="text-5xl font-bold mb-6">
//               Welcome to AIgri 🌱
//             </h1>

//             <p className="text-lg mb-8">
//               Empowering farmers with AI-driven insights for
//               disease detection, crop recommendations, and smart farming.
//             </p>

//             <div className="space-y-4 text-lg">
//               <p>📷 Upload crop images</p>
//               <p>🎤 Talk with AI using voice</p>
//               <p>💬 Chat in your preferred language</p>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="p-10 flex flex-col justify-center">

//             <h2 className="text-4xl font-bold text-green-700 mb-2">
//               Login
//             </h2>

//             <p className="text-gray-500 mb-8">
//               Continue your smart farming journey.
//             </p>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full border border-gray-300 p-4 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-green-600"
//             />

//             <button className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800 transition duration-300 text-lg font-semibold">
//               Login
//             </button>

//             <p className="text-center mt-6 text-gray-600">
//               Don't have an account?
//               <span className="text-green-700 font-semibold cursor-pointer ml-1">
//                 Sign Up
//               </span>
//             </p>

//           </div>

//         </div>

//       </main>

//       <Footer />
//     </div>
//   );
// }
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* Left Side Image Section */}
          <div className="relative hidden lg:block">
            <img
              src="/login-hero.jpg"
              alt="Smart Farming"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-green-900/60 flex flex-col justify-end p-10 text-white">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to AIgri 🌾
              </h1>

              <p className="text-lg leading-relaxed">
                Harness the power of Artificial Intelligence to
                detect crop diseases, receive recommendations,
                and improve farming productivity.
              </p>
            </div>
          </div>

          {/* Right Side Login Form */}
          <div className="p-8 md:p-14 flex flex-col justify-center">

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-green-700 mb-2">
                Sign In
              </h2>

              <p className="text-gray-500">
                Continue your smart farming journey.
              </p>
            </div>

            <form className="space-y-5">

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="farmer@example.com"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="flex justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-green-700 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                className="w-full bg-green-700 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-800 transition"
              >
                Login
              </button>

            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                New to AIgri?
                <span className="text-green-700 font-semibold cursor-pointer ml-2">
                  Create an account
                </span>
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}