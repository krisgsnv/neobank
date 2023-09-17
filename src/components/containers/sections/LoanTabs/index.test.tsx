import { screen, render } from "@testing-library/react";
import LoanTabs from "./";
import userEvent from "@testing-library/user-event";

test("Render tab buttons", () => {
  render(<LoanTabs />);
  const tabsButton = screen.getAllByRole("listitem");
  expect(tabsButton).toHaveLength(4);
  tabsButton.forEach((button) => expect(button).toBeInTheDocument());
});

test("Click on the tab", async () => {
  render(<LoanTabs />);
  await userEvent.click(screen.getByText(/rates and conditions/i));
  expect(screen.getByText(/card currency/i)).toBeInTheDocument();
});

test("Default tab", async () => {
  render(<LoanTabs />);
  expect(screen.getByText(/convenient deposit and withdrawal/i)).toBeInTheDocument();
});
