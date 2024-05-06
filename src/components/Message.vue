<template>
  <p class="mt-2 text-sm text-red-600" v-if="props.message">
    <span class="font-medium">Oops!</span> {{ props.message }}
  </p>
</template>
<script setup>
const props = defineProps({
  message: "",
});
</script>
