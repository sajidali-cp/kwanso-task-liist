import { Form, Formik } from "formik";
import React from "react";
import { GenericFormikInput } from "../../components/_common/GenericInput/GenericInput";
import useCreateTask from "../../hooks/useCreateTask";
import { Dots, PrimaryButton } from "./StyledCreateTaskForm";
export default function CreateTaskForm() {
  const { validationSchema, handleSubmit } = useCreateTask();
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, ...res }) => (
        <Form style={{ width: "100%" }}>
          <GenericFormikInput
            label="Task Name"
            placeholder="XYZ"
            type="text"
            name="name"
          />
          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Dots>Create</Dots> : "Submit"}
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}
