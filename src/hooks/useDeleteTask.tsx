import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { deleteTask, updateTask } from "../store/reducers/taskReducer";
import { TaskDetail } from "../store/types/TaskTypes";

export default function useDeleteTask() {
  const { tasks, isAnySelected } = useSelector(
    (state: RootState) => state.task
  );
  const [isDeleteing, setisDeleteing] = useState(false);
  const dispatch = useDispatch();
  const column = [
    {
      title: "Id",
      key: "id",
    },
    {
      title: "Task name",
      key: "name",
    },
    {
      title: "select",
      key: "id",
      render: (item: any, data: any) => {
        return (
          <span>
            <input
              type="checkbox"
              checked={item.selected}
              className="form-check-input"
              id="rowcheck{user.id}"
              onChange={(e) => onItemCheck(e, data)}
            />
          </span>
        );
      },
    },
  ];
  const onItemCheck = (e: any, item: any) => {
    const { checked } = e.target;
    dispatch(updateTask({ item: item, checked: checked }));
  };
  const handleDeleteRows = () => {
    setisDeleteing(true);
    debugger;
    dispatch(deleteTask(tasks));
    setisDeleteing(false);
  };

  return { column, tasks, handleDeleteRows, isDeleteing, isAnySelected };
}
