<script setup>
import { ref, computed } from "vue";
import DisplayPasswordHistoryList from '~/components/DisplayPasswordHistoryList.vue'

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

const hasMinLength = computed(() => props.password.length >= 8);
const hasUpperCase = computed(() => /[A-Z]/.test(props.password));
const hasLowerCase = computed(() => /[a-z]/.test(props.password));
const hasNumber = computed(() => /[0-9]/.test(props.password));
const hasSpecialChar = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(props.password));

const strengthPercentage = computed(() => {
  if (!props.password) return 0;

  let strength = 0;
  const criteria = [
    hasMinLength.value,
    hasUpperCase.value,
    hasLowerCase.value,
    hasNumber.value,
    hasSpecialChar.value
  ];

  strength = criteria.filter(Boolean).length;
  return Math.round((strength / 5) * 100);
});

const strengthColor = computed(() => {
  const percentage = strengthPercentage.value;
  if (percentage < 40) return 'rgba(192, 21, 47, 1)';
  if (percentage < 80) return 'rgba(245, 158, 11, 1)';
  return 'rgba(34, 197, 94, 1)';
});

const strengthText = computed(() => {
  if (!props.password) return 'No Password';
  const percentage = strengthPercentage.value;
  if (percentage < 40) return 'Weak';
  if (percentage < 80) return 'Medium';
  return 'Strong';
});
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
    <div class="strength-meter">
      <div class="strength-bar">
        <div class="strength-fill" :style="{
          width: strengthPercentage + '%',
          backgroundColor: strengthColor
        }"></div>
      </div>
      <div class="strength-info">
        <span class="strength-label" :style="{ color: strengthColor }">
          {{ strengthText }}
        </span>
        <span class="strength-percentage">
          {{ strengthPercentage }}%
        </span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="requirements">
        <strong>Requirements:</strong>
        <ul>
          <li :class="{ met: hasMinLength }">At least 8 characters</li>
          <li :class="{ met: hasUpperCase }">Contains uppercase letter</li>
          <li :class="{ met: hasLowerCase }">Contains lowercase letter</li>
          <li :class="{ met: hasNumber }">Contains number</li>
          <li :class="{ met: hasSpecialChar }">Contains special character</li>
        </ul>
      </div>
      <!-- List of all the password copied -->
      <DisplayPasswordHistoryList :passwordHistory="passwordHistory" />
    </div>
  </div>
</template>