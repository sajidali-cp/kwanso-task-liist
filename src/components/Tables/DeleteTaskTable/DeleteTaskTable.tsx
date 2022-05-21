// import { Delete } from "@material-ui/icons";
// import MaterialTable from "@material-table/core";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store/configureStore";
// import { deleteTask } from "../../../store/reducers/taskReducer";
// import { Tasktate } from "../../../store/types/TaskTypes";
// import TableIcons from "./TableIcons";

// export default function DeleteTaskTable() {
//   const { tasks } = useSelector((state: RootState) => state.task);
//   const dispatch = useDispatch();
//   const handleDeleteRows = (event: any, rowData: any) => {
//     let _data = [...tasks];
//     rowData.forEach((rd: any) => {
//       _data = _data.filter((t: any) => t.tableData.id !== rd.tableData.id);
//     });
//     dispatch(deleteTask(_data));
//   };

//   return (
//     <MaterialTable
//       title="Select row(s) to get the option to delete"
//       columns={[
//         {
//           title: "Id",
//           field: "id",
//         },
//         {
//           title: "Name",
//           field: "name",
//         },
//       ]}
//       data={tasks}
//       options={{
//         selection: true,
//         pageSize: 10,
//       }}
//       icons={TableIcons}
//       actions={[
//         {
//           icon: () => <Delete />,
//           tooltip: "Delete Rows",
//           onClick: handleDeleteRows,
//         },
//       ]}
//     />
//   );
// }

import React, { Component, useRef } from "react";
import MaterialTable from "material-table";

// Import Material Icons
import { forwardRef } from "react";

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { Icons } from "@material-table/core";

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function DeleteTaskTable() {
  const { tasks } = useSelector((state: RootState) => state.task);
  // Material Table Columns
  const columns = [
    {
      title: "Id",
      field: "id",
    },
    {
      title: "Name",
      field: "name",
    },
  ];

  const tableRef = useRef();

  return (
    <div className="App">
      <MaterialTable
        title="Material Table Actions"
        tableRef={tableRef}
        icons={tableIcons}
        columns={columns}
        data={tasks}
      />
    </div>
  );
}
