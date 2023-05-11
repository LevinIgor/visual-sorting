<template>
  <div class="settings">
    <span class="header">
      <vSettings class="settings" />
    </span>
    <vRange class="range" />
  </div>
</template>

<script setup>
  import vRange from "@/components/v-range.vue";
  import vSettings from "@/components/icons/settings.vue";
</script>

<style lang="scss" scoped>
  .settings {
    display: flex;

    .header {
      font-size: clamp(1rem, 1vw, 2rem);
      writing-mode: vertical-rl;
      background-color: rgba(128, 128, 128, 0.432);
      display: grid;
      place-items: center;
      cursor: pointer;
      user-select: none;

      .settings {
        width: 45px;
        height: 45px;
        margin: 0 1rem;
      }
    }
  }
</style>
