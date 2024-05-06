<template>
  <div class="">
    <form @submit="onSubmitHandler" class="mx-auto">
      <component :is="steps[currentStep]" v-model:person="person" />
{{ person }}}
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
  

if (currentStep.value === 0) {
    if (!validateUsername()) return;
  } else if (currentStep.value === 1) {
    if (!validateEmail()) return;
  }

  message.value = "";

  currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) {
message.value = ""
    currentStep.value--;
  }
};

const regex = useRegex();
const message = ref("");

const validateUsername = () => {
  if (person.value.username.length === 0) {
    message.value = "Invalid Username.";
    return false;
  }

  if (!regex.username.test(person.value.username)) {
    message.value = "Invalid Username.";
    return false;
  }

  return true;
};
const validateEmail = () => {
  if (person.value.email.length === 0) {
    message.value = "Invalid email address.";
    return false;
  }

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
