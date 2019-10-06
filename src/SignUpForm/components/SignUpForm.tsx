import React from "react";
import { Form, Input, Checkbox, Modal, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
const Option = Select.Option;

export interface SignUpFormProps {
  isModalVisible: boolean;
  onCancel: () => void;
  handleSubmit: () => void;
  isLoading: boolean;
}

interface Props extends FormComponentProps, SignUpFormProps {}

const SignUpForm: React.FC<Props> = ({
  form,
  isModalVisible,
  onCancel,
  handleSubmit,
  isLoading
}) => {
  const { getFieldDecorator } = form;

  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "65"
  })(
    <Select style={{ width: 70 }}>
      <Option value="65">+65</Option>
      <Option value="1">+1</Option>
    </Select>
  );

  return (
    <>
      <Modal
        title="Survey and Sign-up List"
        visible={isModalVisible}
        onCancel={onCancel}
        onOk={handleSubmit}
        confirmLoading={isLoading}
      >
        <Form>
          <Form.Item label="Email (Optional)">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Not valid email"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Phone Number (Optional)">
            {getFieldDecorator("phone")(
              <Input
                type="number"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            )}
          </Form.Item>
          <Form.Item label="Can you foresee doing this as a full-time job?">
            {getFieldDecorator("q1", {
              rules: [{ required: true, message: "Please input your answer" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Are you looking for an alternative to driving for Uber/ Grab/ GoJek? Why?">
            {getFieldDecorator("q2", {
              rules: [{ required: true, message: "Please input your answer" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Why do you want to be a travel guide?">
            {getFieldDecorator("q3", {
              rules: [{ required: true, message: "Please input your answer" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Why do you think you are suitable? (There are no wrong answers!)">
            {getFieldDecorator("q4", {
              rules: [{ required: true, message: "Please input your answer" }]
            })(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("mailing", {
              valuePropName: "checked"
            })(<Checkbox>Sign up for our mailing list?</Checkbox>)}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Form.create<Props>({ name: "sign-up-form" })(SignUpForm);
