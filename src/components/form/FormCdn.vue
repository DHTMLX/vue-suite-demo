<template>
  <div ref="form"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "FormCdn",
  data: () => ({
    form: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.chart = new dhx.Form(this.$refs.form, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
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
            text: "I agree",
            name: "agree",
          },
          {
            type: "button",
            text: "Send",
            size: "medium",
            view: "flat",
            submit: true,
            color: "primary",
          },
        ],
      });
    });
  },
  beforeDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  },
};
</script>
