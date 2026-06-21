export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div>
          <h2 className="text-2xl font-bold">
            AIgri 🌱
          </h2>
          <p className="mt-2 text-gray-300">
            Empowering farmers with AI-driven insights.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <ul className="flex gap-6">
            <li className="hover:text-yellow-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Dashboard
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-300">
        © 2026 AIgri. All Rights Reserved.
      </div>
    </footer>
  );
}