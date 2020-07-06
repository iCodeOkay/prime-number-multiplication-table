import React from 'react';
import Cell from './Cell';

const Row = ({ label, values }) => (
  <tr>
    <Cell value={label} />
    {values.map((value, i) => (
      <Cell key={i} value={value} />
    ))}
  </tr>
);

Row.defaultProps = {
  label: '',
  values: [],
};

export default Row;
