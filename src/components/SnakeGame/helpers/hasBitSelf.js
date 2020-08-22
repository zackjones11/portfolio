const hasBitSelf = (snake, { row, column }) => {
  return snake.some(
    (snakePart) => snakePart.row === row && snakePart.column === column
  );
};

export default hasBitSelf;
