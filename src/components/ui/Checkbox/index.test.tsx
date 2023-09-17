import { render, screen } from "@testing-library/react";
import Checkbox from "./";
import userEvent from "@testing-library/user-event";

test("Correct label", async () => {
  render(<Checkbox label="checkbox" />);
  const label = screen.getByText("checkbox");
  expect(label).toBeInTheDocument();
});

test("Checked on click", async () => {
  render(<Checkbox label="checkbox" />);
  const checkbox = screen.getByRole("checkbox");
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("Default checked", async () => {
  render(<Checkbox label="checkbox" checked={true} />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();
});
