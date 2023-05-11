<template>
  <div class="v-range">
    <label class="max">1000</label>
    <input
      @mousedown="isShowValue = true"
      @mouseup="isShowValue = false"
      @change="onChange"
      class="input-range"
      v-model="value"
      type="range"
      min="10"
      max="1000"
      orient="vertical"
      step="22"
    />
    <label class="min">10</label>
    <label
      v-if="isShowValue"
      :style="`transform:translateY(-${value / 10}px )`"
      class="current-value"
      >{{ value }}</label
    >
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const value = ref(10);
  const isShowValue = ref(false);

  function onChange(e) {
    console.log(e.target.value);
  }
</script>

<style lang="scss" scoped>
  input[type="range"][orient="vertical"] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 10px;
    outline: none;
    cursor: pointer;
    height: 100px;

    &::-webkit-slider-runnable-track {
      background-color: grey;
      border-radius: 1rem;
    }
  }

  .v-range {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      padding: 5px 0;
    }

    .current-value {
      position: absolute;
      left: 40px;
      bottom: 10px;
    }
  }
</style>
