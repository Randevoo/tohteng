import React, { MouseEvent, FormEvent } from "react";
import { Modal, Button } from "antd";
import SignUpForm, { FormValues } from "./SignUpForm";
import { FormikActions } from "formik";

interface Props {
  isModalVisible: boolean;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
}

const SignUpModal: React.FC<Props> = ({ isModalVisible, onCancel }) => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
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
