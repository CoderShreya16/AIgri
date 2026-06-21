// import Link from "next/link";
// export default function Navbar() {
//   return (
//     <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center">

//         {/* Logo */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">
//             AIgri 🌱
//           </h1>

//           <button className="bg-white text-green-700 px-3 py-2 rounded-full font-semibold md:hidden">
//             👤
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-center">
//           <li className="hover:text-yellow-300 cursor-pointer">Home</li>
//           <li className="hover:text-yellow-300 cursor-pointer">About</li>
//           <li className="hover:text-yellow-300 cursor-pointer">Dashboard</li>
//           <li className="hover:text-yellow-300 cursor-pointer">Login</li>
//         </ul>

//         {/* Desktop Profile Button */}
//         <button className="hidden md:block bg-white text-green-700 px-3 py-2 rounded-full font-semibold">
//           👤
//         </button>
//       </div>
//     </nav>
//   );
// }
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">

//         {/* Logo */}
//         <Link href="/">
//           <h1 className="text-3xl font-bold cursor-pointer text-center md:text-left">
//             AIgri 🌱
//           </h1>
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-center">
//           <li>
//             <Link href="/" className="hover:text-yellow-300">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-yellow-300">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/dashboard" className="hover:text-yellow-300">
//               Dashboard
//             </Link>
//           </li>

//           <li>
//             <Link href="/login" className="hover:text-yellow-300">
//               Login
//             </Link>
//           </li>
//         </ul>

//         {/* Profile Icon */}
//         <button className="bg-white text-green-700 px-3 py-2 rounded-full font-semibold mt-4 md:mt-0 self-center md:self-auto">
//           👤
//         </button>

//       </div>
//     </nav>
//   );
// }
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold cursor-pointer">
            AIgri 🌱
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-yellow-300 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className="hover:text-yellow-300 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="hover:text-yellow-300 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Profile Icon */}
        <button className="bg-white text-green-700 px-3 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          👤
        </button>

      </div>
    </nav>
  );
}