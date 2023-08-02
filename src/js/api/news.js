import axios from "axios";

const getNews = async () => {
  const API_KEY = "5fd452a43fd84dd48e9fdf3e66fee6b9";

  const options = {
    method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    params: {
      country: "us",
      category: "business",
      pageSize: 30,
      apiKey: API_KEY,
    },
  };

  try {
    const request = await axios.request(options);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export default getNews;
