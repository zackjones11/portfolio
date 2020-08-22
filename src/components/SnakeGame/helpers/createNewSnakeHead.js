import { DIRECTIONS } from "../constants";

const createNewSnakeHead = (currentHead, { direction }) => {
  const { Up, Down, Left, Right } = DIRECTIONS;

  if (!Object.values(DIRECTIONS).includes(direction)) {
    throw new Error("createNewSnakeHead - Direction not supported");
  }

  return {
    [Up]: {
      row: currentHead.row - 1,
      column: currentHead.column,
    },
    [Down]: {
      row: currentHead.row + 1,
      column: currentHead.column,
    },
    [Left]: {
      row: currentHead.row,
      column: currentHead.column - 1,
    },
    [Right]: {
      row: currentHead.row,
      column: currentHead.column + 1,
    },
  }[direction];
};

export default createNewSnakeHead;
