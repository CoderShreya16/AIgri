import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 dark:bg-gray-950 text-white mt-12 py-10 border-t border-green-700/30 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight">
            AIgri 🌱
          </h2>
          <p className="mt-2 text-sm text-green-100/80 dark:text-gray-400">
            Empowering farmers with AI-driven insights.
          </p>
        </div>

        <div className="mt-2 md:mt-0">
          <ul className="flex gap-6">
            <li>
              <Link href="/about" className="text-sm font-medium hover:text-green-200 dark:hover:text-green-400 transition-colors cursor-pointer">
                About
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="text-sm font-medium hover:text-green-200 dark:hover:text-green-400 transition-colors cursor-pointer">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/login" className="text-sm font-medium hover:text-green-200 dark:hover:text-green-400 transition-colors cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-green-700/20 dark:border-gray-900/50 text-center text-xs text-green-200/60 dark:text-gray-500">
        © 2026 AIgri. All Rights Reserved.
      </div>
    </footer>
  );
}