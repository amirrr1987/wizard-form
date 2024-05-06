<template>
  <div>
    <label for="email">Email:</label>
    <input :value="email" @input="onInput" type="text" id="email" name="email" />
  </div>
</template>
<script setup>
defineProps({
  email: String,
});
const emits = defineEmits(["update:email"])

const onInput = (e) => {
    console.log(e.target.value);
    emits("update:email" , e.target.value)
}
</script>
