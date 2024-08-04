import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      router.push("/news");
    }
  }, [session]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      toast.success("Login successful!", {
        autoClose: 3000, // 3 seconds
      });

      setTimeout(() => {
        router.push("/news");
      }, 3000); // Redirect after 3 seconds
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
        <div className="bg-blue-100 shadow-xl rounded-lg p-6 sm:p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
              Login
            </span>
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
              >
                Login
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs italic mt-4">{error}</p>
            )}
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
