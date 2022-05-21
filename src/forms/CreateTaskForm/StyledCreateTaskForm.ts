import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  width: 30%;
  min-width: 240px;
  padding: 16px;
  font-size: 1.2rem;
  p {
    margin-left: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled(Button).attrs({
  type: "submit",
})`
  pointer-events: ${({ disabled }) => disabled && "none"};
  background-color: ${({ disabled }) => (disabled ? "#B9B9B9" : "#00AEEF")};
`;

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PrimaryButton2 = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  width: 30%;
  min-width: 100px;
  padding: 16px;
  font-size: 1.2rem;
  p {
    margin-left: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
  pointer-events: ${({ disabled }) => disabled && "none"};
  background-color: ${({ disabled }) => (disabled ? "#B9B9B9" : "#00AEEF")};
`;

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 2em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    20% {
      content: "..";
    }
    40% {
      content: "...";
    }
    60% {
      content: "....";
    }
    80% {
      content: ".....";
    }
  }
`;
