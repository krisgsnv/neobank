import { screen } from "@testing-library/react";
import NotFound from "./";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "@/utils/testing";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

test("Button as navigate", async () => {
  renderWithRouter(<NotFound />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith(-1);
});
