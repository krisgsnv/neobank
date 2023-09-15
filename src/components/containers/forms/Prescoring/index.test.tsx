import { screen } from "@testing-library/react";
import Prescoring from "./";
import { renderWithProvidersAndRouter } from "@/utils/testing";
import userEvent from "@testing-library/user-event";

test("Default form values", () => {
  renderWithProvidersAndRouter(<Prescoring />, {
    preloadedState: {
      application: { step: 0 },
      prescoring: {
        offers: [],
        formData: {
          amount: 150000,
          lastName: "Ivanov"
        },
        step: 0,
        status: "success"
      }
    }
  });

  expect(screen.getByPlaceholderText("For Example Doe")).toHaveValue("Ivanov");
});

test("Error message", async () => {
  renderWithProvidersAndRouter(<Prescoring />, {
    preloadedState: {
      application: { step: 0 },
      prescoring: {
        offers: [],
        formData: {
          amount: 150000
        },
        step: 0,
        status: "success"
      }
    }
  });

  await userEvent.click(screen.getByText(/continue/i));
  expect(screen.getByText(/incorrect last name/i)).toBeInTheDocument();
});

test("Input field", async () => {
  renderWithProvidersAndRouter(<Prescoring />, {
    preloadedState: {
      application: { step: 0 },
      prescoring: {
        offers: [],
        formData: {
          amount: 150000
        },
        step: 0,
        status: "success"
      }
    }
  });

  await userEvent.type(screen.getByPlaceholderText("For Example John"), "John");
  expect(screen.getByPlaceholderText("For Example John")).toHaveValue("John");
});
