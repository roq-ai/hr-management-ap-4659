import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_status: yup.string().nullable(),
});
