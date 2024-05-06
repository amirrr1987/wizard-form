<template>
  <div class="mt-5 flex gap-x-4">
    <button
      id="btn-prev"
      @click.prevent="emits('prev')"
      :disabled="props.step === 0"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      Prev
    </button>
    <button
      id="btn-next"
      @click.prevent="emits('next')"
      :disabled="props.step === 2"
      v-if="props.step <= 2"

      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Next
    </button>
    <button
      id="btn-submit"
      @click.prevent="emits('ok')"
      v-if="props.step === 2"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </div>
</template>
<script setup>
const emits = defineEmits(["next", "prev", "ok"]);

const props = defineProps({
  step: 0,
});
</script>
