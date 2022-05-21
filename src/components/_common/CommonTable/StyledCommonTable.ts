import styled from "styled-components";
export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: 10px;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  color: black;
  tr {
    white-space: nowrap;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    color: black;
    text-align: left;
    &:first-child {
      background: none;
      box-shadow: none;
      border-radius: none;
    }
  }
  th {
    padding: 0 1rem;
  }
  td {
    text-align: left;
    text-align: center;
    padding: 1rem;
    span {
      display: flex;
    }
    &:first-child {
      border-left-style: transparent;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-right-style: transparent;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`;

export const NoData = styled.div`
  padding: 2rem;
  text-align: center;
`;
