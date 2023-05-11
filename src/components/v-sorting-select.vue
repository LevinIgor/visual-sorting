<template>
  <div
    @click="emits('onSelected', $event.target.innerText)"
    class="sorting-select"
  >
    <span :class="currentSorting === 'Bubble' ? 'active' : null">Bubble</span>
    <span :class="currentSorting === 'Insert' ? 'active' : null">Insert</span>
    <span :class="currentSorting === 'Quick' ? 'active' : null">Quick</span>
    <span :class="currentSorting === 'Merge' ? 'active' : null">Merge</span>
    <span :class="currentSorting === 'Radix' ? 'active' : null">Radix</span>
  </div>
</template>

<script setup>
  const emits = defineEmits(["onSelected"]);
  const props = defineProps(["currentSorting"]);
</script>

<style lang="scss" scoped>
  .sorting-select {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    background-color: rgb(65, 65, 65);

    span {
      font-size: clamp(14px, 2vw, 18px);
      width: 100%;
      text-align: center;
      padding: 0.4rem 0;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: azure;
      }
    }

    .active {
      background-color: red;
    }
  }
</style>
