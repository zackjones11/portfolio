import { DIRECTIONS, KEY_BIND } from "../constants";

const isGoingBackwards = ({ direction, keyCode }) => {
  const { Up, Down, Left, Right } = DIRECTIONS;
  const oposites = [
    `${Up}:${Down}`,
    `${Down}:${Up}`,
    `${Left}:${Right}`,
    `${Right}:${Left}`
  ];

  if (!Object.values(DIRECTIONS).includes(direction)) {
    throw new Error("isGoingBackwards - Direction not supported");
  }

  return oposites.includes(`${direction}:${KEY_BIND[keyCode]}`);
};

export default isGoingBackwards;
