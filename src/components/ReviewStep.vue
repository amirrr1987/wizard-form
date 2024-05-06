<template>
  <div
    class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
  >
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-5">
        Step: review
      </h1>
      <p class="mb-3 font-normal text-gray-700">
        Username:
        <span class="font-medium ml-2">{{ props.person.username }}</span>
      </p>
      <p class="mb-3 font-normal text-gray-700">
        Email: <span class="font-medium ml-2">{{ props.person.email }}</span>
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  person: {
    username: String,
    email: String,
  },
});
const emits = defineEmits(["update:person"])
</script>
