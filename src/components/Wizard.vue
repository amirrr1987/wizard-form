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
import { StepsEnum } from "@/enums";

const steps = [UsernameStep, EmailStep, ReviewStep];

const person = ref({
  username: "",
  email: "",
});

let currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value === StepsEnum.USERNAME) {
    if (!regex.isValidUsername(person.value.username)) {
      message.value = "Invalid Username.";
      return false;
    }
  }
  if (currentStep.value === StepsEnum.EMAIL) {
    if (!regex.isValidEmail(person.value.email)) {
      message.value = "Invalid email address.";
      return false;
    }
  }

  message.value = "";

  currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) {
    message.value = "";
    currentStep.value--;
  }
};

const regex = useRegex();
const message = ref("");

const onSubmitHandler = () => {
  console.dir(person.value);
};
</script>
