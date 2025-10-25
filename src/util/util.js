import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const copied = ref(false);

export async function useCopy(password) {
  if (password) {
    await navigator.clipboard.writeText(password);
    copied.value = true;
    toast("Copied: " + password, {
      autoClose: 1000
    });
    setTimeout(() => (copied.value = false), 1500);
  }
}
