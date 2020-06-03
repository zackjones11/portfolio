const hasEatenFood = (food, { row, column }) => {
  return food.row === row && food.column === column;
};

export default hasEatenFood;
