<template data-test-id="snakeGameView">
  <div
    :class="$style.board"
    :style="{
      gridTemplate: `repeat(${numOfCells}, 1fr) / repeat(${numOfCells}, 1fr)`,
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

    <DirectionArrows v-if="showDirectionalArrows" @click="onDigitalKeyPress" />

    <div v-if="isGameOver" @click="startGame" :class="$style.board__gameOver">
      <h2 :class="$style.board__headline">
        PRESS <span>SPACEBAR</span> TO PLAY AGAIN
      </h2>
    </div>
  </div>
</template>

<script>
import { randomNumber } from "@/utils";
import { DIRECTIONS, KEY_BIND, SPACE_BAR_CODE } from "./constants";
import { DESKTOP_BREAKPOINT } from "@/constants";
import {
  hasBitSelf,
  hasEatenFood,
  isOutside,
  isGoingBackwards,
  createNewSnakeHead,
} from "./helpers";
import DirectionArrows from "./DirectionArrows";

export default {
  name: "SnakeGame",
  components: { DirectionArrows },
  data() {
    return {
      isGameOver: false,
      snake: [{ row: 4, column: 5 }],
      food: { row: 7, column: 10 },
      direction: DIRECTIONS.Right,
    };
  },
  computed: {
    showDirectionalArrows() {
      return window.innerWidth < DESKTOP_BREAKPOINT;
    },
  },
  props: {
    numOfCells: {
      type: Number,
      default: 30,
    },
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
    onDigitalKeyPress(direction) {
      const isGoingForwards = !isGoingBackwards({
        currDirection: this.direction,
        newDirection: direction,
      });

      if (isGoingForwards) {
        this.direction = direction;
      }
    },
    onKeyPress(event) {
      const keyCode = event.keyCode;
      const isSpaceBar = keyCode === SPACE_BAR_CODE;

      if (this.isGameOver && isSpaceBar) {
        this.startGame();
      }

      const isAllowedKey = Object.keys(KEY_BIND).includes(`${keyCode}`);
      const isGoingForwards = !isGoingBackwards({
        currDirection: this.direction,
        newDirection: KEY_BIND[keyCode],
      });

      if (isAllowedKey && isGoingForwards) {
        event.preventDefault();
        this.direction = KEY_BIND[keyCode];
      }
    },
    move() {
      const currentHead = this.snake[this.snake.length - 1];
      const newHead = createNewSnakeHead(currentHead, {
        direction: this.direction,
      });

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
        column: randomNumber({ min: 1, max: this.numOfCells }),
      };
    },
  },
};
</script>

<style module>
.board {
  display: grid;
  position: relative;
  width: 100%;
  max-height: 500px;
  max-width: 500px;
  border: 4px solid var(--brown-200);
  background-color: var(--brown-100);
}

.board:after {
  content: "";
  display: block;
  padding-bottom: 100%;
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
  cursor: pointer;
}

.snake {
  background-color: var(--light-yellow);
}

.food {
  background-color: var(--light-100);
}
</style>
