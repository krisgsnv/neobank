import axios from "axios";
import "dotenv/config";
import type { NewsItemType, NewsItems } from "@/types/News";
import { containsHTML, haveEmptyValues, isValidSrc } from "@/utils/validation";

const News = {
  get: async (): Promise<NewsItems> => {
    const options = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      params: {
        country: "us",
        category: "business",
        pageSize: 30,
        apiKey: process.env.NEWS_API_KEY
      }
    };

    try {
      const request = await axios.request(options);
      return request.data.articles;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  filter: async (news: NewsItems) => {
    if (news) {
      const imagePromises = news.map(
        async ({ url, urlToImage, title, description }) =>
          await isValidSrc({ url, urlToImage, title, description }, "urlToImage")
      );
      const imagePromisesResult = await Promise.allSettled(imagePromises);
      const fulfilled = (
        imagePromisesResult.filter(
          (promise) => promise.status === "fulfilled" && promise.value
        ) as unknown as Array<PromiseFulfilledResult<NewsItemType>>
      ).map((result) => result.value);

      return fulfilled.filter(({ url, urlToImage, title, description }) => {
        const entries = { url, urlToImage, title, description };
        return !haveEmptyValues(entries) && !containsHTML(description);
      });
    } else {
      return null;
    }
  }
};

export default News;
