import React, { useState, useCallback } from "react";
import { Button } from "antd";
import { useMutation } from "@apollo/react-hooks";
import logo from "./logo.svg";
import "./App.css";

import SignUpFormModal from "./SignUpForm/SignUpForm";
import { FormComponentProps } from "antd/lib/form";
import {
  PostSignUpForm_submitForm,
  PostSignUpFormVariables
} from "../ApolloAPI/PostSignUpForm";
import PostSignUpFormMutation from "./SignUpForm/queries.gql";

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formRef, setFormRef] = useState<FormComponentProps["form"]>();

  const [postSignUpForm, { data, loading, error }] = useMutation<
    PostSignUpForm_submitForm,
    PostSignUpFormVariables
  >(PostSignUpFormMutation);

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  const handleSubmit = () => {
    if (formRef) {
      formRef.validateFieldsAndScroll(
        async (error, { email, phone, q1, q2, q3, q4, mailing }) => {
          if (error) {
            return;
          }
          await postSignUpForm({
            variables: {
              email: email || "",
              phone: parseFloat(phone) || -1,
              q1,
              q2,
              q3,
              q4,
              mailing
            }
          });
          console.log(data);
          setModalVisible(false);
        }
      );
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
          isLoading={loading}
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
