import React, { useEffect } from "react";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";

import { Input, Button } from "antd";

interface ComponentProps {
  onSubmit: (values: FormProps, actions: FormikActions<FormProps>) => void;
}

export interface FormProps {
  firstName: string;
}

const SignUpForm: React.FC<ComponentProps> = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "" }}
        onSubmit={onSubmit}
        render={(formikBag: FormikProps<FormProps>) => (
          <Form>
            <Field
              name="firstName"
              render={({ field, form }: FieldProps<FormProps>) => (
                <div>
                  <Input type="text" {...field} placeholder="First Name" />
                  {form.touched.firstName &&
                    form.errors.firstName &&
                    form.errors.firstName}
                </div>
              )}
            ></Field>
            <button type="submit"></button>
          </Form>
        )}
      ></Formik>
    </div>
  );
};

export default SignUpForm;
