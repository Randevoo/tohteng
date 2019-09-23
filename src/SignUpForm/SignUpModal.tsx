import React, { MouseEvent, FormEvent } from "react";
import { Modal, Button } from "antd";
import SignUpForm from "./SignUpForm";

interface Props {
  isModalVisible: boolean;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
}

const SignUpModal: React.FC<Props> = ({ isModalVisible, onCancel }) => {
  return (
    <div>
      <Modal title="Test" visible={isModalVisible} onCancel={onCancel}>
        <SignUpForm
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            console.log(event);
          }}
        ></SignUpForm>
      </Modal>
    </div>
  );
};

export default SignUpModal;
