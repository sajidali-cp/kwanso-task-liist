import React from "react";
import { useSelector } from "react-redux";
import { CardsWrapper } from "../components/TaskCard/StyledTaskCard";
import TaskCard from "../components/TaskCard/TaskCard";
import { RootState } from "../store/configureStore";

export default function ListTaskPage() {
  const { tasks } = useSelector((state: RootState) => state.task);
  return (
    <>
      {!tasks.length && <h4>No task created yet</h4>}
      <CardsWrapper>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </CardsWrapper>
    </>
  );
}
