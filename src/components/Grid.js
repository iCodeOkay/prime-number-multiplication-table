import React from 'react';
import Row from './Row';

const Grid = ({ data }) => (
  <table>
    <tbody>
      {/* 1st row with heading for columns */}
      <Row values={data.map((row) => row.yLabel)} />

      {/* Actual Rows with data */}
      {data.map((row, i) => (
        <Row
          key={i}
          label={row.yLabel}
          values={row.children.map((child) => child.xyValue)}
        />
      ))}
    </tbody>
  </table>
);

Grid.defaultProps = {
  data: [],
};

export default Grid;
