import { render, screen } from "@testing-library/react";
import Input from "./";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const TestForm = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const methods = useForm({ mode: "onChange" });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

test("Type into an input field", async () => {
  render(<Input name="test" />, { wrapper: TestForm });
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "testValue");
  expect(input).toHaveValue("testValue");
});

test("Error must not be in the component by default", () => {
  render(
    <Input name="test" registerParams={{ required: "Field is required" }} />,
    { wrapper: TestForm }
  );
  expect(screen.queryByText("Field is required")).not.toBeInTheDocument();
});

test("Error must be in the component if value is incorrect", async () => {
  render(
    <Input
      name="test"
      registerParams={{
        maxLength: {
          value: 2,
          message: "Error message"
        }
      }}
    />,
    { wrapper: TestForm }
  );
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "testValue");
  expect(screen.queryByText("Error message")).toBeInTheDocument();
});
