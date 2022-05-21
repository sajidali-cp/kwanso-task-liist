import styled from "styled-components";

export const Error = styled.p`
  color: #e23e47 !important;
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 7px;

  border: 1px solid rgba(1, 34, 81, 0.2);
  padding: 0.625rem;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  min-height: 3.125rem;
  max-height: 3.125rem;
  input {
    border: none;
    resize: none;
    outline: none;
    display: flex;
    flex: 1;
    width: 100%;
    appearance: none;
    padding: 0.625rem 0.375rem;
    font-size: 1rem;
  }
`;
