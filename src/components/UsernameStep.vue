<template>
  <div>
    <label for="username">Username:</label>
    <input :value="username" @input="onInput" type="text" id="username" name="username" />
  </div>
</template>
<script setup>
defineProps({
  username: String,
});
const emits = defineEmits(["update:username"])

const onInput = (e) => {
    console.log(e.target.value);
    emits("update:username" , e.target.value)
}
</script>
