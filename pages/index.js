import React from "react";
import styled from "styled-components";
import Table from "../src/components/Table.js";//src/components/Table.js
import { COLUMNS } from "../src/Columns.js";
import tableData from "../src/table_data.json";

const TableWrapper = styled.section`
  padding: 0 150px 0 150px;
  padding-bottom: 130px;

  h1 {
    text-align: center;
    color: #000;
    font-size: 36px;
    font-weight: 900;
    padding: 50px 0 0 0;
  }
  .table-container {
    height: 700px;
    overflow: auto;
  }
  .table-container::-webkit-scrollbar {
    width: 10px;
  }
  .table-container::-webkit-scrollbar-thumb {
    height: 4px;
    background: #3c1742;
    border-radius: 10px;
  }
  .table-container::-webkit-scrollbar-track {
    border: 1px solid #3c1742;
    border-radius: 10px;
  }
  @media only screen and (max-width: 992px) {
    padding: 0 15px 0 15px;
    padding-bottom: 130px;

    .table-container::-webkit-scrollbar {
      display: none;
    }
  }`;

  const UserTable = () => {
    return (
      <TableWrapper>
        <h1>Leaderboard</h1>
        <div className="table-container">
          <Table
            columns={COLUMNS}
            data={tableData}
          />
        </div>
      </TableWrapper>
    );
  };
  
  export default UserTable;