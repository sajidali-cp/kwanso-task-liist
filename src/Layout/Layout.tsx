import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Wrapper, ChildrenWrapper } from "./StyledLayout";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default Layout;
