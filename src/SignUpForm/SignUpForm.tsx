import React, { MouseEvent } from "react";
import { Modal, Button } from "antd";

interface Props {
  isModalVisible: boolean;
  onCancel: (e: MouseEvent<HTMLElement>) => void;
}

const SignUpForm: React.FC<Props> = ({ isModalVisible, onCancel }) => {
  return (
    <div>
      <Modal title="Test" visible={isModalVisible} onCancel={onCancel}>
        <Button>Test</Button>
      </Modal>
    </div>
  );
};

export default SignUpForm;
