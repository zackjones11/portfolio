<template data-test-id="snakeGameView">
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
import { randomNumber } from "../../utils";
import { DIRECTIONS, KEY_BIND, SPACE_BAR_CODE } from "./constants";
import {
  hasBitSelf,
  hasEatenFood,
  isOutside,
  isGoingBackwards
} from "./helpers";

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
      const keyCode = event.keyCode;
      const isSpaceBar = keyCode === SPACE_BAR_CODE;

      if (this.isGameOver && isSpaceBar) {
        this.startGame();
      }

      const isAllowedKey = Object.keys(KEY_BIND).includes(`${keyCode}`);
      const isGoingForwards = !isGoingBackwards({
        direction: this.direction,
        keyCode
      });

      if (isAllowedKey && isGoingForwards) {
        event.preventDefault();
        this.direction = KEY_BIND[keyCode];
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

      if (
        isOutside(this.numOfCells, newHead) ||
        hasBitSelf(this.snake, newHead)
      ) {
        this.endGame();
        return;
      }

      if (hasEatenFood(this.food, currentHead)) {
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
  border: 4px solid var(--brown-200);
  background-color: var(--brown-100);
}

.board__gameOver {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--brown-100);
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
  background-color: var(--light-yellow);
}

.food {
  background-color: var(--light-100);
}
</style>
