import React, { MouseEvent, FormEvent, useState } from "react";
import { Modal, Button, Form } from "antd";
import SignUpForm from "./SignUpForm";

interface Props {
  isModalVisible: boolean;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
}

const SignUpModal: React.FC<Props> = ({ isModalVisible, onCancel }) => {
  const onSubmit = (e: FormEvent) => console.log(e);
  const [formRef, setFormRef] = useState<Form>();

  const handleOk = () => {
    console.log("called");
    if (formRef) {
      const { form } = formRef.props;
      if (form) {
        form.validateFields((error, values) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log("Success", values);
        });
      }
    }
  };

  return (
    <div>
      <Modal
        title="Test"
        visible={isModalVisible}
        onCancel={onCancel}
        onOk={handleOk}
      >
        <SignUpForm
          wrappedComponentRef={(form: Form) => setFormRef(form)}
          onSubmit={onSubmit}
        />
      </Modal>
    </div>
  );
};

export default SignUpModal;
