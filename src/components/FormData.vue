<script setup>
import { reactive } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => { },
  },
});

const emit = defineEmits(['update:modelValue']);

const options = reactive({ ...props.modelValue })

function onChangeHandler() {
  emit('update:modelValue', options)
}

function onModeChange() {
  if (options.mode === "say") {
    options.useNumbers = false;
    options.useSymbols = false;
  } else if (options.mode === "read") {
    options.useNumbers = false;
    options.useSymbols = false;
  } else if (options.mode === "all") {
    options.useNumbers = true;
    options.useSymbols = true;
  }
  onChangeHandler();
}

function onlySymbols(e) {
  e.target.value = e.target.value.replace(/[a-zA-Z0-9\s]/g, '')
  options.customSymbols = [...new Set(e.target.value.split(''))].join('')

  if (options.customSymbols.length)
    onChangeHandler();
}
</script>

<template>
  <div class="bg-white shadow rounded-2xl col-span-12 p-6">
    <div class="mb-6">
      <label class="block text-lg font-medium mb-2">Password Length</label>
      <div class="flex items-center gap-4">
        <!-- <input type="number" @change="onChangeHandler" v-model="options.length" min="4" max="50"
          class="border rounded-md p-2 w-16 text-center" /> -->
        <input type="number"
          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-16 text-sm rounded-md focus:outline-blue-500"
          @change="onChangeHandler" v-model="options.charLength" min="4" max="50" />
        <input type="range" @change="onChangeHandler" v-model="options.charLength" min="4" max="50" class="flex-1" />
        <span class="ml-2 font-semibold text-lg">{{ options.charLength }}</span>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" @change="onModeChange" v-model="options.mode" value="say" class="w-5 h-5" />
        Easy to say
      </label>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" @change="onModeChange" v-model="options.mode" value="read" class="w-5 h-5" />
        Easy to read
      </label>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="radio" @change="onModeChange" v-model="options.mode" value="all" class="w-5 h-5" />
        All characters
      </label>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" @change="onChangeHandler" v-model="options.useUppercase" class="size-5" /> Uppercase
      </label>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" @change="onChangeHandler" v-model="options.useLowercase" class="size-5" /> Lowercase
      </label>

      <label class="flex items-center gap-2" :class="options.mode === 'say' ? 'cursor-not-allowed' : 'cursor-pointer'">
        <input type="checkbox" @change="onChangeHandler" v-model="options.useNumbers" :disabled="options.mode === 'say'"
          class="size-5" />
        <span :class="{ 'text-gray-400': options.mode === 'say' }">Numbers</span>
      </label>

      <label class="flex items-center gap-2" :class="options.mode === 'say' ? 'cursor-not-allowed' : 'cursor-pointer'">
        <input type="checkbox" @change="onChangeHandler" v-model="options.useSymbols" :disabled="options.mode === 'say'"
          class="size-5" />
        <span :class="{ 'text-gray-400': options.mode === 'say' }">Symbols</span>
      </label>
    </div>

    <div class="mb-4">
      <label class="block text-slate-900 text-sm font-medium mb-2" for="customSymbols">
        Custom Symbols: !@#$%^&*()_+{}[]<>?,.
      </label>
      <input type="text" id="customSymbols" @input="onlySymbols" v-model="options.customSymbols"
        placeholder="!@#$%^&*()_+{}[]<>?,."
        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-500" />
    </div>
  </div>
</template>