<script setup>
  import { ref, reactive } from "vue";
  import vHeader from "@/components/v-header.vue";
  import vCodeBlock from "@/components/v-code-block.vue";
  import Array from "@/JSON/array.json";

  const array = reactive([]);
  const currentCol = ref(9999);
  const currentSorting = ref({});
  const arrayRange = ref(100);

  async function sort() {
    if (!currentSorting.value.fnc) {
      await chooseSort("Bubble");
    }

    array.length = 0;
    array.push(...Array.splice(0, arrayRange.value));
    currentSorting.value.fnc(array, currentCol);
  }

  async function chooseSort(name) {
    await import(`@/sorting/${name.toLowerCase()}.js`)
      .then((el) => (currentSorting.value = el.default))
      .catch((er) => {
        console.log(er);
      });

    return new Promise((r) => r());
  }
</script>

<template>
  <vHeader
    @on-sort-select="chooseSort"
    @on-start="sort"
    @on-range-change="arrayRange = $event"
  />

  <div class="table">
    <TransitionGroup name="list">
      <div
        :id="'col-' + column"
        v-for="(column, index) in array"
        :key="column"
        class="col"
        :style="{
          height: `${column}%`,
          width: `${Math.floor(Array.length / arrayRange) + 1}px`,
        }"
        :class="{
          active: currentCol === index,
        }"
      />
    </TransitionGroup>
  </div>
  <div class="aside">
    <vCodeBlock :code="currentSorting.code" />
  </div>
</template>

<style scoped lang="scss">
  .table {
    display: flex;
    justify-content: center;
    align-items: end;
    cursor: pointer;
    height: 100px;

    .col {
      width: 1px;
      background-color: rgba(128, 128, 128, 0.417);
      margin: 0 1px;

      display: grid;
      place-items: center;
      user-select: none;
    }
    .active {
      background-color: rgba(255, 0, 0, 0.709);
    }
  }

  .aside {
    position: fixed;
    bottom: 100px;
    right: 0;
    display: flex;
    flex-direction: column;
  }

  .list-enter-active,
  .list-move,
  .list-leave-active {
    background-color: red;
    transition: transform 0.2s;
  }
  .list-leave-active {
    position: absolute;
  }
</style>
