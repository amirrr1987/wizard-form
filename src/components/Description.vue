<template>
  <!-- <form>
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
          placeholder="Enter your description.."
          required
          v-model="description"
          id="description"
          type="text"
          @input="debouncedIsBalanced"
        />

        <p class="mt-2 text-sm text-green-600" v-if="!isBalancedValue">
          The text is balanced.
        </p>
        <p class="mt-2 text-sm text-red-600" v-else>
          The text is not balanced.
        </p>
      </div>
    </div>
  </form> -->
  <form>
    <div class="grid">
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Description
      </label>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id="description"
        type="text"
        v-model="description"
        @input="debouncedIsBalanced"
      />
      <p
        class="mt-2 text-sm text-green-600"
        :class="isBalancedValue ? 'text-green-600' : 'text-red-600'"
        v-if="description"
      >
        The text is<template v-if="!isBalancedValue"> not</template> balanced.
      </p>
    </div>
  </form>
</template>

<script>
import { useRegex } from "@/utils/regex";
import { debounce } from "@/utils/debounce";

export default {
  data() {
    return {
      description: "",
      regex: useRegex(),
      isBalancedValue: true,
    };
  },
  methods: {
    debouncedIsBalanced: debounce(function () {
      this.isBalanced();
    }, 300),
    isBalanced() {
      this.isBalancedValue = !this.regex.chars.test(this.description);
    },
  },
};
</script>
