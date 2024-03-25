<template>
  <div class="right-content-wrapper">
    <Chart />
    <Form />
    <ButtonsForm />
    <Colorpicker />
    <MessageDataview />
  </div>
</template>

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

<style>
  .right-content-wrapper {
    display: flex;
    height: 100%;
    width: fit-content;
    gap: 12px;
    flex: 1;
    min-width: 500px;
    flex-direction: column;
  }
</style>