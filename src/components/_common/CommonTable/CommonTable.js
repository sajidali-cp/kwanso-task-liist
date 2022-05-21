import React from "react";
import { Table, TableWrapper, NoData } from "./StyledCommonTable";

export default function CommonTable({ data, column }) {
  console.log(data);
  const getItem = (dataItem, columnItem) => {
    if (columnItem.render) {
      return columnItem.render(dataItem[columnItem.key], dataItem);
    } else {
      return <span>{dataItem[columnItem.key]}</span>;
    }
  };
  return (
    <>
      <TableWrapper>
        {data.length > 0 ? (
          <Table>
            <tr>
              {column &&
                column.map((item, i) => {
                  return (
                    <th
                      key={i}
                      style={{
                        minWidth: `${100 / column.length}%`,
                        maxWidth: `${100 / column.length}%`,
                      }}
                    >
                      <span>{item.title}</span>
                    </th>
                  );
                })}
            </tr>
            {data.map((dataItem) => (
              <tr key={dataItem.id}>
                {column.map((columnItem, index) => {
                  return (
                    <td
                      style={{
                        minWidth: `${100 / column.length}%`,
                        maxWidth: `${100 / column.length}%`,
                      }}
                    >
                      {getItem(dataItem, columnItem)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </Table>
        ) : (
          <NoData>No data to show</NoData>
        )}
      </TableWrapper>
    </>
  );
}

// const selectIdHandler = (id)=>{
//   getId(rowItem.value)}
// }

{
  /* <div id="header">
              {column &&
                column.map((item, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        minWidth: `${100 / column.length}%`,
                        maxWidth: `${100 / column.length}%`,
                      }}
                    >
                      <span className={styles.coinWrapper}>{item.title}</span>
                    </div>
                  );
                })}
            </div>
              <div id="tablebody">
                {data.map((dataItem) => (
                  <div className={styles.card}>
                    {column.map((columnItem, index) => {
                      return (
                        <div
                          style={{
                            minWidth: `${100 / column.length}%`,
                            maxWidth: `${100 / column.length}%`,
                          }}
                        >
                          {getItem(dataItem, columnItem)}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div> */
}
