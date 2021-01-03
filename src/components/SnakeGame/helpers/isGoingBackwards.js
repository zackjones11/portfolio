import { DIRECTIONS } from "../constants";

const isGoingBackwards = ({ currDirection, newDirection }) => {
  const { Up, Down, Left, Right } = DIRECTIONS;
  const oposites = [
    `${Up}:${Down}`,
    `${Down}:${Up}`,
    `${Left}:${Right}`,
    `${Right}:${Left}`,
  ];

  if (!Object.values(DIRECTIONS).includes(currDirection)) {
    throw new Error("isGoingBackwards - Direction not supported");
  }

  return oposites.includes(`${currDirection}:${newDirection}`);
};

export default isGoingBackwards;
