<template>
  <header>
    <span>Choose sort method:</span>
    <select @change="emits('onSortSelect', $event.target.value)" name="" id="">
      <option value="Bubble">Bubble</option>
      <option value="Insert">Insert</option>
      <option value="3">Merge</option>
      <option value="4">Radix</option>
      <option value="Quick">Quick</option>
    </select>

    <span>Select data size: </span>
    <input
      @change="emits('onRangeChange', $event.target.value)"
      type="range"
      min="10"
      :max="Array.length"
    />
    <button @click="emits('onStart')">Run sorting!</button>
  </header>
</template>

<script setup>
  import { ref } from "vue";
  import Array from "@/JSON/array.json";


  const emits = defineEmits(["onSortSelect", "onStart", "onRangeChange"]);

  function onChange(e) {
    console.log(e.target.value);
  }
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(40, 40, 40);
    padding: 1rem;
    display: flex;

    select {
      background-color: transparent;
      border: none;
      outline: none;
      color: whitesmoke;
      font-size: 1rem;

      option {
        background-color: black;
        border: none;
      }
    }
    button {
      margin-left: auto;
    }
  }
</style>
