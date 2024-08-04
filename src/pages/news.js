import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function News() {
  const { data: session } = useSession();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState(""); // New state for category
  const pageSize = 10; // Adjust as needed

  useEffect(() => {
    if (session) {
      const fetchNews = async () => {
        try {
          const { data } = await axios.get(
            `/api/news?page=${page}&pageSize=${pageSize}&category=${category}`
          );
          setArticles(data.articles);
          setTotalResults(data.totalResults); // Set the total results
          setLoading(false);
        } catch (err) {
          console.error("Error fetching news:", err);
          setError("Failed to load news articles");
          setLoading(false);
        }
      };
      fetchNews();
    }
  }, [session, page, category]);

  if (!session) {
    return (
      <p className="text-center text-lg font-semibold text-gray-800 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent p-4 rounded-lg shadow-lg">
        You need to be logged in to view this page.
      </p>
    );
  }

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-500">{error}</p>
    );
  }

  const totalPages = Math.ceil(totalResults / pageSize); // Calculate total pages

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Latest News
          </h1>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-2 text-lg font-medium"
            >
              Filter by category:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full p-2.5 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>

          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform transform hover:scale-105 hover:bg-orange-100"
              >
                <h2 className="text-2xl font-serif font-semibold mb-2 text-gray-800">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="mt-4 flex justify-end">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 text-white font-semibold rounded-full border border-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg font-semibold text-gray-700">
              No articles available.
            </p>
          )}

          <div className="flex justify-between mt-6">
            <button
              disabled={page <= 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Previous
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
