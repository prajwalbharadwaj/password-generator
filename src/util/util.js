import { ref } from "vue";
const copied = ref(false);

export async function useCopy(password) {
  if (password) {
    await navigator.clipboard.writeText(password);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  }
}
