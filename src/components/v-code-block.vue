<template>
  <div
    class="code-block"
    :style="isOpen ? 'transform: translateX(-600px)' : null"
  >
    <span @click="handler" class="header">Code</span>
    <div
      @click="onCopy"
      class="code"
      :class="{ flash: isFlash }"
      title="Click to copy"
    >
      <pre v-highlightjs><code class="javascript">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useClipboard } from "@vueuse/core";

  const isOpen = ref(false);
  const isFlash = ref(false);
  const props = defineProps(["code"]);
  const { copy } = useClipboard();

  function handler() {
    isOpen.value = !isOpen.value;
  }

  function onCopy() {
    copy(props.code);

    isFlash.value = true;

    setTimeout(() => {
      isFlash.value = false;
    }, 200);
  }
</script>

<style lang="scss" scoped>
  .code-block {
    position: relative;
    right: -600px;
    user-select: none;

    display: flex;
    transition: transform 1s;

    .code {
      width: 600px;
      min-height: 400px;
      cursor: pointer;

      pre {
        height: 100%;
      }

      code {
        height: 100%;
      }

      & {
        ::-webkit-scrollbar {
          height: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    }

    .flash code {
      background-color: rgb(23, 80, 1);
    }

    .header {
      writing-mode: vertical-rl;
      font-size: clamp(20px, 5vw, 28px);
      text-align: center;
      background-color: rgba(128, 128, 128, 0.417);
      cursor: pointer;
      padding: 1rem 0;
    }
  }
</style>
