const isOutside = (numOfCells, { row, column }) => {
  return row > numOfCells || column > numOfCells || row < 0 || column < 0;
};

export default isOutside;
