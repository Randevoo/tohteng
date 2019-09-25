import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface Props extends FormComponentProps {
  isModalVisible: boolean;
  onCancel: () => void;
}

export const SignUpForm: React.FC<Props> = ({
  form,
  isModalVisible,
  onCancel
}) => {
  useEffect(() => {
    form.validateFields();
  }, []);

  const handleSubmit = () => {
    form.validateFields((error, values) => {
      console.log(values);
    });
  };

  const { getFieldDecorator, getFieldValue } = form;

  return (
    <div>
      <Modal
        title="Test"
        visible={isModalVisible}
        onCancel={onCancel}
        onOk={handleSubmit}
      >
        <Form>
          <Form.Item label="Question 1:">
            {getFieldDecorator("q1", {
              rules: [{ required: true, message: "Answer required" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Question 2:">
            {getFieldDecorator("q2", {
              rules: [{ required: true, message: "Answer required" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Question 3:">
            {getFieldDecorator("q3", {
              rules: [{ required: true, message: "Answer required" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Question 4:">
            {getFieldDecorator("q4", {
              rules: [{ required: true, message: "Answer required" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(<Checkbox>Sign up for our mailing list?</Checkbox>)}
          </Form.Item>
          {(getFieldValue("agreement") as boolean) && (
            <Form.Item label="Email">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "Not valid email"
                  },
                  {
                    required: true,
                    message: "Email required"
                  }
                ]
              })(<Input />)}
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Form.create<Props>({ name: "sign-up-form" })(SignUpForm);
