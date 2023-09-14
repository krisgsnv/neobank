import { render, screen } from "@testing-library/react";
import Select from "./";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const TestForm = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const methods = useForm({ mode: "onChange" });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" }
];

test("Default option", () => {
  render(
    <TestForm>
      <Select name="test" options={options} selectedIndex={1} />
    </TestForm>
  );
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("Toggle dropdown on click", async () => {
  const { container } = render(
    <TestForm>
      <Select name="test" options={options} selectedIndex={1} />
    </TestForm>
  );
  const selectedOption = screen.getByText("2");
  expect(container.querySelector(".select__options")).not.toBeInTheDocument();
  await userEvent.click(selectedOption);
  expect(container.querySelector(".select__options")).toBeInTheDocument();
});

test("Select value", async () => {
  render(
    <TestForm>
      <Select name="test" options={options} selectedIndex={1} />
    </TestForm>
  );
  const selectedOption = screen.getByText("2");
  await userEvent.click(selectedOption);
  await userEvent.click(screen.getByText("1"));
  expect(selectedOption).toHaveTextContent("1")
});
