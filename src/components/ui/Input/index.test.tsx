import { render, screen } from "@testing-library/react";
import Input from "./";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const TestForm = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const methods = useForm({ mode: "onChange" });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

test("Type into an input field", async () => {
  render(
    <TestForm>
      <Input name="test" />
    </TestForm>
  );
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "testValue");
  expect(input).toHaveValue("testValue");
});

test("Error must not be in the component by default", () => {
  const { container } = render(
    <TestForm>
      <Input name="test" registerParams={{ required: "Field is required" }} />
    </TestForm>
  );
  const error = container.querySelector(".input-error");
  expect(error).not.toBeInTheDocument();
});

test("Error must be in the component if value is incorrect", async () => {
  const { container } = render(
    <TestForm>
      <Input
        name="test"
        registerParams={{
          maxLength: {
            value: 2,
            message: "Error message"
          }
        }}
      />
    </TestForm>
  );
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "testValue");
  const error = container.querySelector(".input-error");
  expect(error).toBeInTheDocument();
});
