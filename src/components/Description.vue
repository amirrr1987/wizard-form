<template>
  <div>
    <h1>Step: review</h1>
    <div>Username: {{ username }}</div>
    <div>Email: {{ email }}</div>
  </div>
</template>
<script setup>
defineProps({
  email: String,
  username: String,
});
</script>
