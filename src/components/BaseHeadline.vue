<template>
  <component :class="$style.headline" v-bind:is="`h${level}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    level: {
      type: Number,
      required: true,
      validator: prop => prop <= 6
    }
  }
};
</script>

<style module>
.headline {
  text-transform: uppercase;
  letter-spacing: 4px;
}

.headline:after {
  content: "";
  display: block;
  width: 5%;
  height: 3px;
  margin-top: 4px;
  background-color: var(--light-300);
}
</style>
