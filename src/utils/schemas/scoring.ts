import * as yup from "yup";
// import { today } from "@/utils/date";
// import { getYear, setYear, parse, isValid, format } from "date-fns";

const schema = yup.object().shape({
  gender: yup.string().required("Select one of the options"),
  maritalStatus: yup.string().required("Select one of the options"),
  dependentAmount: yup.number().required("Select one of the options"),
  passportIssueDate: yup.string().required(),
  passportIssueBranch: yup
    .string()
    .matches(/^\d{6}$/, "The division code must be 6 digits")
    .required(),
  employmentStatus: yup.string().required("Select one of the options"),
  employerINN: yup.number().required(),
  salary: yup.number().required("Enter your salary"),
  position: yup.string().required("Select one of the options"),
  workExperienceTotal: yup
    .number()
    .typeError("Enter your work experience total")
    .required(),
  workExperienceCurrent: yup
    .number()
    .typeError("Enter your work experience current")
    .required()
});

export default schema;
