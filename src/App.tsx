import React, { useState } from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";

import Modal from "./SignUpForm/SignUpForm";

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
        <Modal
          isModalVisible={isModalVisible}
          onCancel={() => setModalVisible(false)}
        ></Modal>
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
