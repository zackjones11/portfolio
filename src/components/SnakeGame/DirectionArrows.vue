<template>
  <div :class="$style.directionArrows">
    <button
      v-for="direction in directions"
      :key="direction.id"
      @click="onClick(direction)"
      :class="[
        $style.directionArrows__button,
        $style[`directionArrows__button--${direction}`],
      ]"
    >
      <span :class="[$style.arrowIcon, $style[`arrowIcon--${direction}`]]" />
    </button>
  </div>
</template>

<script>
import { DIRECTIONS } from "./constants";

export default {
  name: "SnakeGameDirectionArrows",
  data() {
    return {
      directions: [
        DIRECTIONS.Up,
        DIRECTIONS.Left,
        DIRECTIONS.Down,
        DIRECTIONS.Right,
      ],
    };
  },
  methods: {
    onClick(direction) {
      this.$emit("click", direction);
    },
  },
};
</script>

<style module>
.directionArrows {
  display: inline-grid;
  grid-column-gap: 0;
  align-self: end;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.directionArrows__button {
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background: grey;
  border-right: 4px solid #4d4d4d;
  border-bottom: 4px solid #4d4d4d;
  border-left: 4px solid #5a5a5a;
  border-top: 4px solid #676767;
  margin: 5px;
  outline: 0;
  user-select: none;
  opacity: 0.7;
}

.directionArrows__button:active {
  border-bottom: 8px solid darken(grey, 20);
  transform: translate(0, 1px);
  opacity: 1;
}

.directionArrows__button--up {
  grid-column-start: 2;
}

.directionArrows__button--left {
  grid-column-start: 1;
}

.directionArrows__button--down {
  grid-column-start: 2;
}

.directionArrows__button--right {
  grid-column-start: 3;
}

.arrowIcon {
  width: 0;
  height: 0;
  display: block;
}

.arrowIcon--up {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 8px solid white;
}

.arrowIcon--down {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid white;
}

.arrowIcon--right {
  border-top: 5px solid transparent;
  border-left: 8px solid white;
  border-bottom: 5px solid transparent;
}

.arrowIcon--left {
  border-top: 5px solid transparent;
  border-right: 8px solid white;
  border-bottom: 5px solid transparent;
}
</style>
