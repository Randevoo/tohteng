import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FormComponentProps } from "antd/lib/form";
import {
  PostSignUpForm,
  PostSignUpFormVariables
} from "ApolloTypes/PostSignUpForm";
import PostSignUpFormMutation from "../queries/queries.gql";
import SignUpForm from "../components/SignUpForm";
import { notification } from "antd";

interface ContainerProps {
  setModalVisible: (isVisible: boolean) => void;
  isModalVisible: boolean;
}

const SignUpFormContainer: React.FC<ContainerProps> = ({
  setModalVisible,
  isModalVisible
}) => {
  const [postSignUpForm, { loading }] = useMutation<
    PostSignUpForm,
    PostSignUpFormVariables
  >(PostSignUpFormMutation, {
    onCompleted: ({ submitForm }) => {
      const mailing = submitForm.mailing;
      notification.success({
        message: "Success!",
        description: `Thank you for your time!${
          mailing
            ? " You will be notified about the upcoming events of Randevu in the upcoming weeks!"
            : ""
        }`
      });
    }
  });

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
