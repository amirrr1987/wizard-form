<template>
  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John"
          required
          v-model="description"
          id="description"
          type="text"
          @input="isBalanced"
        />

        <p
          class="mt-2 text-sm"
          :class="isBalancedValue ? 'text-green-600' : 'text-red-600'"
          v-if="description"
        >
          <template v-if="isBalancedValue"> The text is balanced. </template>
          <template v-else> The text is not balanced. </template>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import { useRegex } from "@/utils/regex";

export default {
  data() {
    return {
      description: "",
      regex: useRegex(),
      isBalancedValue: true,
    };
  },
  methods: {
    isBalanced() {
      this.isBalancedValue = !this.regex.chars.test(this.description);
    },
  },
};
</script>
