<template>
  <div ref="form"></div>
</template>

<script>
import { Form as FormDHX } from "dhx-suite";
export default {
  name: "FormBase",
  data: () => ({
    form: null,
  }),
  mounted() {
    this.form = new FormDHX(this.$refs.form, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      gravity: false,
      width: 400,
      rows: [
        {
          type: "input",
          label: "Name",
          icon: "dxi-magnify",
          placeholder: "John Doe",
        },
        {
          type: "input",
          label: "Email",
          placeholder: "jd@mail.name",
        },
        {
          type: "input",
          inputType: "password",
          label: "Password",
          placeholder: "********",
        },
        {
          type: "checkbox",
          label: "I agree",
          name: "agree",
          labelPosition: "right",
          value: "checkboxvalue",
        },
        {
          type: "button",
          value: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary",
        },
      ],
    });
  },
  beforeDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  },
};
</script>
