<template>
  <div
    :class="$style.board"
    :style="{
      gridTemplate: `repeat(${numOfCells}, 1fr) / repeat(${numOfCells}, 1fr)`
    }"
  >
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

    <div v-if="isGameOver" :class="$style.board__gameOver">
      <h2 :class="$style.board__headline">
        PRESS <span>SPACEBAR</span> TO PLAY AGAIN
      </h2>
    </div>
  </div>
</template>

<script>
import { randomNumber } from "../helpers";

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

const SPACE_BAR_CODE = 32;

export default {
  name: "SnakeGame",
  data() {
    return {
      isGameOver: false,
      snake: [{ row: 4, column: 5 }],
      food: { row: 7, column: 10 },
      direction: DIRECTIONS.Right
    };
  },
  props: {
    numOfCells: {
      type: Number,
      default: 30
    }
  },
  created() {
    this.startGame();
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
  methods: {
    startGame() {
      this.resetData();
      this.gameInterval = setInterval(this.move, 100);
    },
    endGame() {
      this.isGameOver = true;
      clearInterval(this.gameInterval);
    },
    resetData() {
      Object.assign(this.$data, this.$options.data());
    },
    onKeyPress(event) {
      if (this.isGameOver && event.keyCode === SPACE_BAR_CODE) {
        this.startGame();
        return;
      }

      if (Object.keys(KEY_BIND).includes(`${event.keyCode}`)) {
        event.preventDefault();
        this.direction = KEY_BIND[event.keyCode];
      }
    },
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

      if (this.isOutside(newHead) || this.hasBitSelf(newHead)) {
        this.endGame();
        return;
      }

      if (this.hasEatenFood(currentHead)) {
        this.snake = [...this.snake, newHead];
        this.addFood();
      } else {
        this.snake = [...this.snake.slice(1), newHead];
      }
    },
    addFood() {
      this.food = {
        row: randomNumber({ min: 1, max: this.numOfCells }),
        column: randomNumber({ min: 1, max: this.numOfCells })
      };
    },
    isOutside({ row, column }) {
      return (
        row > this.numOfCells ||
        column > this.numOfCells ||
        row < 0 ||
        column < 0
      );
    },
    hasBitSelf({ row, column }) {
      return this.snake.some(
        snakePart => snakePart.row === row && snakePart.column === column
      );
    },
    hasEatenFood({ row, column }) {
      return this.food.row === row && this.food.column === column;
    }
  }
};
</script>

<style module>
.board {
  display: grid;
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  border: 4px solid var(--brown);
  background-color: var(--dirt-green);
}

.board__gameOver {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--dirt-green);
}

.board__headline {
  max-width: 200px;
  text-align: center;
  font-family: var(--font-bebas-neue);
  letter-spacing: 5px;
  line-height: 1.7;
  font-size: 30px;
}

.board__headline span {
  border: 2px solid var(--light-100);
  padding: 2px 9px;
  letter-spacing: 2px;
  font-size: 39px;
}

.snake {
  background-color: var(--brown);
}

.food {
  background-color: var(--light-100);
}
</style>
