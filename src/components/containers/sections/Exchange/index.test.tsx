/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, waitFor, screen } from "@testing-library/react";
import Exchange from "./";
import Exchangeservice from "@/services/Exchange";
import { type ExchangeDataType } from "@/types/Exchange";
import userEvent from "@testing-library/user-event";

jest.mock("@/services/Exchange");

const mockedGetExchange = Exchangeservice.get as jest.MockedFunction<
  typeof Exchangeservice.get
>;

const currencyExchange: ExchangeDataType = [
  ["USD", 96.9925],
  ["EUR", 102.80478649999999],
  ["TRY", 3.5755559999999997],
  ["CHF", 107.6277],
  ["JPY", 0.6522490383],
  ["CNY", 13.2553407]
];

test("Error status", async () => {
  mockedGetExchange.mockRejectedValue(null);
  render(<Exchange />);
  const err = await waitFor(() => screen.getByText(/error/i));
  expect(err).toBeInTheDocument();
});

test("Render exchange table", async () => {
  mockedGetExchange.mockResolvedValue(currencyExchange);
  const { container } = render(<Exchange />);

  const tableCell = await waitFor(() => screen.getByText(/usd/i));
  const tableCells = await waitFor(() =>
    container.querySelectorAll(".exchange__currency")
  );

  expect(tableCells).toHaveLength(6);
  expect(tableCell).toBeInTheDocument();
});

test("Optional quotes dropdown", async () => {
  mockedGetExchange.mockResolvedValue(currencyExchange);
  const { container } = render(<Exchange />);

  const dropdown = await waitFor(() =>
    container.querySelector(".multiselect__dropdown")
  );
  await userEvent.click(dropdown!);
  const checkboxes = await waitFor(() =>
    screen.getAllByRole("checkbox", { hidden: true })
  );
  checkboxes.forEach((checkbox) => expect(checkbox).toBeInTheDocument());
  expect(checkboxes).toHaveLength(4);
});
