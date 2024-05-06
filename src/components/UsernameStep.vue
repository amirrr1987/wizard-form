<template>
  <div>
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">
      Username:
    </label>
    <input
      :value="person.username"
      @input="onInput"
      type="text"
      id="username"
      name="username"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="username"
      required
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["update:person"]);

const onInput = (event) => {
  emits("update:person", { ...props.person, username: event.target.value });
};
</script>
