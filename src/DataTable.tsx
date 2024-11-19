import React from "react";
import { Dropdown, Icon, Table } from "semantic-ui-react";
import { AraDataType } from "./TypeChecking";

function DataTable({data}: {data: AraDataType}) {
  return (
    <div style={{ overflowX: "auto", overflowY: "auto", height: "auto" }}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {data.table_headers.map((header, index) => (
              <Table.HeaderCell key={index}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ paddingRight: "10px" }}>{header.name}</span>
                  <Icon name="trash" />
                </div>
              </Table.HeaderCell>
            ))}
          </Table.Row>
          <Table.Row>
            {data.table_headers.map((header, index) => (
              <Table.HeaderCell key={index}>
                <Dropdown selection options={[{ key: index, text: header.type, value: header.type }]} value={header.type} className="table-dropdown-menu" />
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.table_data.map((row, index) => (
            <Table.Row key={index}>
              {row.map((cell, index) => (
                <Table.Cell key={index}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default DataTable;
