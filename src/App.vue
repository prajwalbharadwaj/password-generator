<script setup>
import { reactive, onMounted, watch } from "vue";

import Navbar from "~/components/Navbar.vue";
import FormData from "~/components/FormData.vue";
import DisplayPassword from "~/components/DisplayPassword.vue";
import { useCopy } from "~/util/util.js";

const state = reactive({
  password: "",
  passwordHistory: [],
  copied: false,
  options: {
    charLength: 12,
    mode: "all",
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
    customSymbols: '',
  }
});

// const handleCopy = async () => {
//   if (state.password) {
//     await navigator.clipboard.writeText(state.password);
//     state.passwordHistory = [...new Set([state.password, ...state.passwordHistory])];

//     state.copied = true;
//     setTimeout(() => (state.copied = false), 1500);
//   }
// };

const handleCopy = async () => {
  await useCopy(state.password);
  state.passwordHistory = [...new Set([state.password, ...state.passwordHistory])];
}

const generatePassword = () => {
  let chars = "";

  if (state.options.mode === "say") {
    if (state.options.useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (state.options.useLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (state.options.customSymbols?.length) chars += state.options.customSymbols;
  } else if (state.options.mode === "read") {
    if (state.options.useUppercase) chars += "ABCDEFGHJKMNPQRSTUVWXYZ";
    if (state.options.useLowercase) chars += "abcdefghjkmnpqrstuvwxyz";
    if (state.options.useNumbers) chars += "0123456789";
    if (state.options.customSymbols?.length) chars += state.options.customSymbols;
  } else {
    if (state.options.useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (state.options.useLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (state.options.useNumbers) chars += "0123456789";
    if (state.options.customSymbols?.length) chars += state.options.customSymbols;
    else if (state.options.useSymbols) chars += "!@#$%^&*()-_=+[]{}|;:,.<>?";
  }

  if (!chars) {
    state.password = "Select options!";
    return;
  }

  let result = "";
  for (let i = 0; i < +state.options.charLength; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  state.password = result;
  state.copied = false;
};

onMounted(() => generatePassword())

watch(() => state.options, () => generatePassword(), { deep: true })
</script>

<template>
  <div>
    <Navbar />
    <section class="grid gap-5 grid-cols-12 place-content-center mt-5 mx-auto max-w-[800px]">
      <DisplayPassword :password="state.password" :passwordHistory="state.passwordHistory" @copy="handleCopy"
        @regenerate="generatePassword" />
      <FormData v-model="state.options" />
    </section>
  </div>
</template>