<template>
	<div ref="combobox" style="width: 400px"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
	name: "ComboboxCdn",
	data: () => ({
    combobox: null
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.combobox = new dhx.Combobox(this.$refs.combobox, {
				placeholder: "Click to choose",
      });
      this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
    })
  },
  beforeDestroy() {
		if (this.combobox) {
      this.combobox.destructor();
    }
	}
}
</script>
