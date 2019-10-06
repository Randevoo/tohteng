import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FormComponentProps } from "antd/lib/form";
import {
  PostSignUpForm_submitForm,
  PostSignUpFormVariables
} from "ApolloTypes/PostSignUpForm";
import PostSignUpFormMutation from "../queries/queries.gql";
import SignUpForm from "../components/SignUpForm";

interface ContainerProps {
  setModalVisible: (isVisible: boolean) => void;
  isModalVisible: boolean;
}

const SignUpFormContainer: React.FC<ContainerProps> = ({
  setModalVisible,
  isModalVisible
}) => {
  const [postSignUpForm, { data, loading, error }] = useMutation<
    PostSignUpForm_submitForm,
    PostSignUpFormVariables
  >(PostSignUpFormMutation);

  const [formRef, setFormRef] = useState<FormComponentProps["form"]>();

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
    <SignUpForm
      ref={saveFormRef}
      isModalVisible={isModalVisible}
      onCancel={() => setModalVisible(false)}
      handleSubmit={handleSubmit}
      isLoading={loading}
    ></SignUpForm>
  );
};

export default SignUpFormContainer;
