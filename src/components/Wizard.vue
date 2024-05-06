<template>
  <div class="">
    <form @submit="onSubmitHandler" class="mx-auto">
      <component :is="steps[currentStep]" v-model:person="person" />

      <ErrorMessage :message="message" />

      <StepButtons
        @next="nextStep"
        @prev="prevStep"
        @ok="onSubmitHandler"
        :step="currentStep"
      />
    </form>
  </div>
</template>

<script setup>
import UsernameStep from "@/components/UsernameStep.vue";
import EmailStep from "@/components/EmailStep.vue";
import ReviewStep from "@/components/ReviewStep.vue";
import StepButtons from "@/components/Buttons.vue";
import ErrorMessage from "@/components/Message.vue";
import { useRegex } from "@/utils/regex";
import { ref } from "vue";

const steps = [UsernameStep, EmailStep, ReviewStep];

const person = ref({
  username: "",
  email: "",
});

let currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value === 0 && !validateUsername()) return;
  if (currentStep.value === 1 && !validateEmail()) return;
  message.value = "";
  currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const regex = useRegex();
const message = ref("");

const validateUsername = () => {
  if (!person.value.username) {
    message.value = "username is not empty";
  }
  if (person.value.username !== "valid_username") {
    message.value = "Invalid Username.";
    return false;
  }
  return true;
};
const validateEmail = () => {
  if (!regex.email.test(person.value.email)) {
    message.value = "Invalid email address.";
    return false;
  }
  return true;
};

const onSubmitHandler = () => {
  console.log("submit ok");
};
</script>
