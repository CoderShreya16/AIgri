export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">

        {/* Logo */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            AIgri 🌱
          </h1>

          <button className="bg-white text-green-700 px-3 py-2 rounded-full font-semibold md:hidden">
            👤
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-center">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-yellow-300 cursor-pointer">Login</li>
        </ul>

        {/* Desktop Profile Button */}
        <button className="hidden md:block bg-white text-green-700 px-3 py-2 rounded-full font-semibold">
          👤
        </button>
      </div>
    </nav>
  );
}