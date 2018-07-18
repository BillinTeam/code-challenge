const NUMBER_OF_COLS = 3;

export const cardStyle = id => {
  const rowId = Math.floor(id / NUMBER_OF_COLS);
  const colId = id % NUMBER_OF_COLS;
  return {
    gridColumn: `col-${colId}`,
    gridRow: `row-${rowId}`,
  };
};

export const h1Style = {
  color: 'blueviolet',
  textAlign: 'center',
};
