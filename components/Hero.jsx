// export default function Hero() {
//   return (
//     <section className="bg-green-50 min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

//       <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
        
//         Smart Farming Starts Here 🌾
//       </h1>

//       <p className="text-lg text-gray-700 max-w-2xl mb-8">
//         AIgri helps farmers make informed decisions using
//         Artificial Intelligence. Detect crop diseases, get
//         crop recommendations, and interact through voice or chat.
//       </p>

//       <button className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition">
//         Get Started
//       </button>

//     </section>
//   );
// }
export default function Hero() {
  return (
    <section className="bg-green-50 min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
        Smart Farming Starts Here 🌾
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        AIgri helps farmers make informed decisions using
        Artificial Intelligence. Detect crop diseases, get
        crop recommendations, and interact through voice or chat.
      </p>

      {/* Chat Input Placeholder */}
      <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl">
        
        <input
          type="text"
          placeholder="Ask AIgri anything about your crops..."
          className="w-full p-3 outline-none text-gray-700"
        />

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4 text-2xl">
            <button className="hover:scale-110 transition">
              📷
            </button>

            <button className="hover:scale-110 transition">
              🎤
            </button>
          </div>

          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
            Send
          </button>
        </div>

      </div>

    </section>
  );
}