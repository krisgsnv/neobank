import { screen } from "@testing-library/react";
import Confirmation from "./";
import { renderWithProviders } from "@/utils/testing";
import userEvent from "@testing-library/user-event";

test("Enter a number", async () => {
  renderWithProviders(<Confirmation statusChangeHandler={() => {}}/>);
  expect(screen.queryByText("2")).not.toBeInTheDocument();
  await userEvent.keyboard("2");
  expect(screen.getByText("2")).toBeInTheDocument();
  await userEvent.keyboard("3");
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("Enter a letter", async () => {
  renderWithProviders(<Confirmation statusChangeHandler={() => {}}/>);
  expect(screen.queryByText("G")).not.toBeInTheDocument();
  await userEvent.keyboard("G");
  expect(screen.queryByText("G")).not.toBeInTheDocument();
});

test("Delete the number", async () => {
  renderWithProviders(<Confirmation statusChangeHandler={() => {}}/>);
  await userEvent.keyboard("1");
  expect(screen.getByText("1")).toBeInTheDocument();
  await userEvent.keyboard("{backspace}");
  expect(screen.queryByText("1")).not.toBeInTheDocument();
});
