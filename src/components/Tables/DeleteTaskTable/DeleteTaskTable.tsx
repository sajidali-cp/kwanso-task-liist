import React from "react";
import {
  Dots,
  PrimaryButton2,
} from "../../../forms/CreateTaskForm/StyledCreateTaskForm";
import useDeleteTask from "../../../hooks/useDeleteTask";
import CommonTable from "../../_common/CommonTable/CommonTable";

export default function DeleteTaskTable() {
  const { column, tasks, handleDeleteRows, isDeleteing, isAnySelected } =
    useDeleteTask();

  return (
    <div style={{ maxWidth: "100%" }}>
      {isAnySelected && (
        <PrimaryButton2 onClick={handleDeleteRows}>
          {isDeleteing ? <Dots>Deleteing</Dots> : "Delete"}
        </PrimaryButton2>
      )}
      <CommonTable data={tasks} column={column} />
    </div>
  );
}
