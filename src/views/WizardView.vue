<script setup>
import TheWizard from "@/components/Wizard.vue";
import TheDescription from "@/components/Description.vue";
</script>

<template>
  <div class="py-12">
    <div class="container mx-auto px-4 mb-12">
      <a href="https://github.com/amirrr1987/wizard-form">
        link => https://github.com/amirrr1987/wizard-form
        <img
          class="w-12 h-12"
          src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
        />
      </a>
    </div>
    <div class="container mx-auto px-4 grid grid-cols-2 gap-4">
      <TheWizard />
      <TheDescription />
    </div>
  </div>
</template>
