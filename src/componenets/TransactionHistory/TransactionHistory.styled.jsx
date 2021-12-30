import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;

  tr,
  th,
  td {
    padding: 10px;
  }
`;

export const TableHead = styled.thead`
  background-color: #63c4e2;
  color: #fff;
  th:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  td:first-of-type {
    text-transform: capitalize;
  }
  td:not(:last-child) {
    border-right: 1px solid #f1f1f1;
  }
`;
