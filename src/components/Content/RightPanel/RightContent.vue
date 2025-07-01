<script>
import Chart from "./Chart.vue";
import Form from "./Form.vue";
import ButtonsForm from "./ButtonsForm.vue";
import Colorpicker from "./Colorpicker.vue";
import MessageDataview from "./MessageDataview.vue";

export default {
  components: {
    Chart,
    Form,
    ButtonsForm,
    Colorpicker,
    MessageDataview
  }
};
</script>

<template>
  <div class="right-content-wrapper">
    <Chart />
    <Form />
    <ButtonsForm />
    <Colorpicker />
    <MessageDataview />
  </div>
</template>
