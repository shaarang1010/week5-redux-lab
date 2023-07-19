import React from "react";
import { Table } from "react-bootstrap";

export const ScoreTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Goals</th>
          <th>Behinds</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ justifyItems: "center" }}>
          <td>{props.goals}</td>
          <td>{props.behinds}</td>
          <td>{props.total}</td>
        </tr>
      </tbody>
    </Table>
  );
};
