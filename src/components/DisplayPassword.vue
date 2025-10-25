<script setup>
import { ref } from "vue";

const props = defineProps({
  password: {
    type: String,
  },
  passwordHistory: {
    type: Array,
  },
});
const emit = defineEmits(['copy', 'regenerate']);

const showCopiedPassword = ref(false)
const buttonClasses = 'size-10 cursor-pointer inline-flex items-center justify-center hover:text-blue-500 rounded border-none outline-none hover:shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white'
</script>

<template>
  <div class="bg-white shadow font-semibold rounded-2xl items-center grid col-span-12 p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="overflow-scroll text-2xl whitespace-nowrap no-scrollbar tracking-[.075em]">{{ password }}</div>
      <div class="flex gap-2">
        <button type="button" :class="buttonClasses" @click="emit('copy')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </g>
          </svg>
        </button>
        <button type="button" :class="buttonClasses" @click="emit('regenerate')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="passwordHistory?.length">
      <div class="flex justify-end cursor-pointer" @click="showCopiedPassword = !showCopiedPassword"> {{
        showCopiedPassword ? 'Hide ' : 'Show ' }}Copied Passwords</div>
      <template v-if="showCopiedPassword">
        <div v-for="item in passwordHistory" :key="item">
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>