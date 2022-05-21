import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./StyledNavBar";
export default function NavBar() {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/list-tasks">Task Lists</NavLink>
        <NavLink to="/create-task">Create Task</NavLink>
        <NavLink to="/bulk-delete">Bulk Delete</NavLink>
      </NavMenu>
    </Nav>
  );
}
