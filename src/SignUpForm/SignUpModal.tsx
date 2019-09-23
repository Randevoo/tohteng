import React, { MouseEvent, FormEvent } from "react";
import { Modal, Button } from "antd";
import SignUpForm, { FormProps } from "./SignUpForm";
import { FormikActions } from "formik";

interface Props {
  isModalVisible: boolean;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
}

const SignUpModal: React.FC<Props> = ({ isModalVisible, onCancel }) => {
  const onSubmit = (values: FormProps, actions: FormikActions<FormProps>) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };
  return (
    <div>
      <Modal title="Test" visible={isModalVisible} onCancel={onCancel}>
        <SignUpForm onSubmit={onSubmit}></SignUpForm>
      </Modal>
    </div>
  );
};

export default SignUpModal;
