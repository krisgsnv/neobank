import { render, screen } from "@testing-library/react";
import Support from "./";
import userEvent from "@testing-library/user-event";
import LocalStorage from "@/services/LocalStorage";

test("Type into an email field", async () => {
  render(<Support />);
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "test@mail.ru");
  expect(input).toHaveValue("test@mail.ru");
});

test("Subscribe message", () => {
  render(<Support />);
  const isSubscribed = LocalStorage.get<boolean>("subscribed");
  const input = screen.getByRole("textbox");
  if (isSubscribed) {
    expect(input).not.toBeInTheDocument();
  } else {
    expect(input).toBeInTheDocument();
  }
});

test("Error message", async () => {
  render(<Support />);
  const button = screen.getByText("Subscribe");
  await userEvent.click(button);
  expect(screen.getByText("Incorrect email address")).toBeInTheDocument();
});
