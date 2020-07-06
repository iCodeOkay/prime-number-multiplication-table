import React from 'react';

const Cell = ({ value }) => <td>{value}</td>;

Cell.defaultProps = {
  value: '',
};

export default Cell;
