import axios from "axios";

export default async (req, res) => {
  const page = req.query.page || 1; // Default to page 1
  const pageSize = req.query.pageSize || 100; // Default to 100 articles
  const category = req.query.category || ""; // Get category from query parameters

  try {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
        country: "us",
        pageSize,
        page,
        category, // Include category in the request
      },
    });

    res.status(200).json({
      articles: data.articles,
      totalResults: data.totalResults, // Add this line
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
};
