<template>
  <div :class="$style.board">
    <div
      :style="{ gridRow: food.row, gridColumn: food.column }"
      :class="$style.food"
    />

    <div
      v-for="snakePart in snake"
      :key="`${snakePart.row}.${snakePart.column}`"
      :style="{ gridColumn: snakePart.column, gridRow: snakePart.row }"
      :class="$style.snake"
    />
  </div>
</template>

<script>
const DIRECTIONS = Object.freeze({
  Up: "up",
  Down: "down",
  Left: "left",
  Right: "right"
});

const KEY_BIND = Object.freeze({
  38: DIRECTIONS.Up,
  40: DIRECTIONS.Down,
  37: DIRECTIONS.Left,
  39: DIRECTIONS.Right
});

export default {
  name: "SnakeGame",
  created() {
    setInterval(this.move, 100);
  },
  data() {
    return {
      snake: [{ row: 4, column: 5 }],
      food: { row: 7, column: 10 },
      direction: DIRECTIONS.Right
    };
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
  methods: {
    move() {
      const { Up, Down, Left, Right } = DIRECTIONS;
      const currentHead = this.snake[this.snake.length - 1];
      const newHead = {
        [Up]: {
          row: currentHead.row - 1,
          column: currentHead.column
        },
        [Down]: {
          row: currentHead.row + 1,
          column: currentHead.column
        },
        [Left]: {
          row: currentHead.row,
          column: currentHead.column - 1
        },
        [Right]: {
          row: currentHead.row,
          column: currentHead.column + 1
        }
      }[this.direction];

      this.snake = [...this.snake.slice(1), newHead];
    },
    onKeyPress(event) {
      if (Object.keys(KEY_BIND).includes(`${event.keyCode}`)) {
        event.preventDefault();
        this.direction = KEY_BIND[event.keyCode];
      }
    }
  }
};
</script>

<style module>
.board {
  display: grid;
  grid-template: repeat(30, 1fr) / repeat(30, 1fr);
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  background-color: var(--dirt-green);
  border: 4px solid var(--brown);
}

.snake {
  background-color: var(--brown);
}

.food {
  background-color: var(--light-100);
}
</style>
