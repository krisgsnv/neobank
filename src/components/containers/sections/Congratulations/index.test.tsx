import { screen } from "@testing-library/react";
import Congratulations from "./";
import { renderWithProviders } from "@/utils/testing";
import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <Congratulations />
  }
]);

test("Redirect to main page", async () => {
  renderWithProviders(<RouterProvider router={router} />);
  expect(screen.getByText(/apply for card right now/i)).toBeInTheDocument();
});
