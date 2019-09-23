import React, { useEffect } from "react";
import Form, { FormComponentProps } from "antd/lib/form";
import { Input } from "antd";

interface Props extends FormComponentProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SignUpForm: React.FC<Props & FormComponentProps> = ({
  form,
  onSubmit
}) => {
  useEffect(() => {
    form.validateFields();
  }, []);

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form;

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Please input the title of collection!"
              }
            ]
          })(<Input></Input>)}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create<Props>({ name: "signup" })(SignUpForm);
