import React, { useState, useCallback } from "react";
import { Button } from "antd";

import logo from "./logo.svg";
import "./App.css";

import SignUpFormModal from "./SignUpForm";

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => setModalVisible(true)}>Open Modal</Button>
        <SignUpFormModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        ></SignUpFormModal>
      </header>
    </div>
  );
};

export default App;
