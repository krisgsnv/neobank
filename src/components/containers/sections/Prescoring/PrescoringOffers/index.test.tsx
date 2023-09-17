import { screen } from "@testing-library/react";
import PrescoringOffers from "./";
import { renderWithProviders } from "@/utils/testing";

test("Render offers", () => {
  renderWithProviders(<PrescoringOffers />, {
    preloadedState: {
      application: { step: 1 },
      prescoring: {
        offers: [
          {
            requestedAmount: 100,
            totalAmount: 100,
            term: 6,
            monthlyPayment: 10,
            rate: 10,
            isInsuranceEnabled: true,
            isSalaryClient: true
          }
        ],
        step: 1,
        status: "success"
      }
    }
  });
  expect(screen.getByText("Select")).toBeInTheDocument();
});
