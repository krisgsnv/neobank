import { render, waitFor, screen } from "@testing-library/react";
import NewsSlider from "./";
import News from "@/services/News";

jest.mock("@/services/News");

const mockedGet = News.get as jest.MockedFunction<typeof News.get>;
const mockedFilter = News.filter as jest.MockedFunction<typeof News.filter>;

const articles = [
  {
    url: "https://www.barrons.com/articles/stock-market-movers-7bfabbfb",
    urlToImage: "https://images.barrons.com/im-688337/social",
    title:
      "Ford, GM, Nvidia, HP Inc., Semtech, and More Stock Market Movers - Barron's",
    description:
      "The head of the United Auto Workers says the union and the Big Three auto makers are still 'very far apart' on the union’s key priorities for wage increases as a strike deadline looms, chip makers Nvidia and Taiwan Semiconductor rise as Arm's IPO is priced at…"
  }
];

test("Error status", async () => {
  mockedGet.mockRejectedValue(null);
  render(<NewsSlider />);
  const err = await waitFor(() => screen.getByText(/error/i));
  expect(err).toBeInTheDocument();
});

test("Render news", async () => {
  mockedGet.mockResolvedValue(articles);
  mockedFilter.mockResolvedValue(articles);
  render(<NewsSlider />);

  const newsItem = await waitFor(() => screen.getByText(/The head of/i));
  expect(newsItem).toBeInTheDocument();
});

test("Image render", async () => {
  render(<NewsSlider />);
  expect(screen.getByAltText(/Ford, GM, Nvidia, HP/i)).toBeInTheDocument();
});
