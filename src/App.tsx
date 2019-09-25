import React, { useState, useCallback } from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";

import SignUpFormModal from "./SignUpForm/SignUpForm";
import { FormComponentProps } from "antd/lib/form";

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formRef, setFormRef] = useState<FormComponentProps["form"]>();
  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  const handleSubmit = () => {
    if (formRef) {
      formRef.validateFieldsAndScroll((error, values) => {
        if (error) {
          return;
        }
        setModalVisible(false);
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => setModalVisible(true)}>Open Modal</Button>
        <SignUpFormModal
          ref={saveFormRef}
          isModalVisible={isModalVisible}
          onCancel={() => setModalVisible(false)}
          handleSubmit={handleSubmit}
        ></SignUpFormModal>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
