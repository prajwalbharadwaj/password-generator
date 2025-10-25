<script setup>
import { useCopy } from "~/util/util.js";

const props = defineProps({
  passwordHistory: {
    type: Array,
  },
});
</script>

<template>
  <div v-if="passwordHistory?.length" class="requirements">
    <strong>Copied Passwords:</strong>
    <div v-for="item in passwordHistory" class="py-1 hover:bg-gray-100 px-1 cursor-pointer flex justify-between group"
      :key="item" @click="useCopy(item)">
      {{ item }}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        class="group-hover:visible invisible">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </g>
      </svg>
    </div>
  </div>
</template>