import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl font-bold hover:text-gray-400">
            Home
          </a>
        </Link>
        <div className="hidden md:flex space-x-4">
          {session ? (
            <>
              <Link href="/news" legacyBehavior>
                <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                  News
                </a>
              </Link>
              <button
                onClick={() => signOut()}
                className="text-white hover:text-gray-400 bg-red-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                  Login
                </a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                  Register
                </a>
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 pb-4">
          <div className="flex flex-col items-start space-y-2 px-4">
            {session ? (
              <>
                <Link href="/news" legacyBehavior>
                  <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                    News
                  </a>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-white hover:text-gray-400 bg-red-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" legacyBehavior>
                  <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                    Login
                  </a>
                </Link>
                <Link href="/signup" legacyBehavior>
                  <a className="text-white hover:text-gray-400 bg-blue-700 hover:bg-red-1000 px-3 py-1 rounded transition duration-300">
                    Register
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
