import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/news");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <Navbar />
      <div className="container mx-auto p-6 space-y-16">
        <header className="text-center space-y-8 py-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-tight animate-pulse">
            Personalized News Aggregator
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Discover a world of information tailored just for you. Stay
            informed, engaged, and ahead of the curve with our cutting-edge news
            platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Get Started
            </button>
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg border-2 border-blue-600">
              Learn More
            </button>
          </div>
        </header>

        <section className="grid gap-12 md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Featured News
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Dive into the most important headlines and breaking stories from
                around the globe. Our AI-powered system ensures you never miss a
                beat.
              </p>
            </div>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition-all duration-300 self-start text-lg">
              Explore Top Stories
            </button>
          </div>

          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl p-10 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800">
              How It Works
            </h2>
            <ul className="space-y-6">
              {[
                {
                  text: "Register and Login for personalized news",
                  desc: "Create your account to unlock a tailored news experience.",
                },
                {
                  text: "Select your interests",
                  desc: "Choose from a wide range of topics that matter to you.",
                },
                {
                  text: "Get tailored articles",
                  desc: "Our AI algorithms curate the perfect news feed for you.",
                },
                {
                  text: "Enjoy seamless reading",
                  desc: "Read, save, and share articles with our intuitive interface.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {item.text}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Real-Time Updates",
                desc: "Stay ahead with breaking news and live updates.",
              },
              {
                title: "Diverse Sources",
                desc: "Get a balanced view from a wide range of trusted sources.",
              },
              {
                title: "AI-Powered Recommendations",
                desc: "Receive articles curated just for you by our advanced algorithms.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-lg sm:text-2xl text-gray-600 mb-6">
            Ready to revolutionize your news experience?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-lg sm:text-xl">
            Start Your Journey Now
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
