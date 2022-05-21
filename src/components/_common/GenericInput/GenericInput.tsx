import { useField } from "formik";
import React from "react";
import { Error, InputContainer, Wrapper } from "./StyledGenericInput";

interface Props {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
}

export const GenericFormikInput = ({ ...res }: Props) => {
  const [field, meta] = useField(res);
  return (
    <>
      <Wrapper>
        {res.label && <label>{res.label}</label>}
        <InputContainer>
          <input {...field} {...res} autoComplete="off" />
        </InputContainer>
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </Wrapper>
    </>
  );
};
