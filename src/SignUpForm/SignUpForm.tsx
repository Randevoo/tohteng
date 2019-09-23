import React, { useEffect } from "react";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
  withFormik,
  FormikErrors,
  ErrorMessage,
  FormikBag
} from "formik";
import * as Yup from "yup";

import { Input, Button } from "antd";

interface ComponentProps {
  onSubmit: (values: FormValues) => void;
}
export interface FormValues {
  firstName: string;
}

const InnerForm = (props: ComponentProps & FormikProps<FormValues>) => (
  <Form>
    <Field
      name="firstName"
      render={({ field, form }: FieldProps<FormValues>) => (
        <div>
          <Input type="text" {...field} placeholder="First Name" />
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
      )}
    ></Field>
    <Button disabled={props.isSubmitting} htmlType="submit">
      Submit
    </Button>
  </Form>
);

const WrappedForm = withFormik<ComponentProps, FormValues>({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .required("Name is required")
  }),
  handleSubmit: (
    values: FormValues,
    { props }: FormikBag<ComponentProps, FormValues>
  ) => {
    props.onSubmit(values);
  }
})(InnerForm);

export default WrappedForm;
