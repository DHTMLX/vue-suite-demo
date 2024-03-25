<template>
  <div ref="node" class="container"></div>
</template>

<script>
import { Form } from "@dhx/trial-suite";

export default {
  data() {
    return {
      node: null,
      form: null,
      country: [
        {
          id: "austria",
          value: "Austria",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/at.png",
        },
        {
          value: "Belarus",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/by.png",
        },
        {
          value: "Belgium",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/be.png",
        },
        {
          value: "Bulgaria",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/bg.png",
        },
        {
          value: "Cyprus",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/cy.png",
        },
        {
          value: "Czech Republic",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/cz.png",
        },
        {
          value: "Denmark",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/dk.png",
        },
        {
          id: "estonia",
          value: "Estonia",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/ee.png",
        },
        {
          value: "Finland",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/fi.png",
        },
        {
          value: "France",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/fr.png",
        },
        {
          value: "Germany",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/de.png",
        },
        {
          value: "Greece",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/gr.png",
        },
        {
          value: "Hungary",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/hu.png",
        },
        {
          value: "Ireland",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/ie.png",
        },
        {
          value: "Italy",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/it.png",
        },
        {
          value: "Latvia",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/lv.png",
        },
        {
          value: "Lithuania",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/lt.png",
        },
        {
          value: "Luxembourg",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/lu.png",
        },
        {
          value: "Malta",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/mt.png",
        },
        {
          value: "Netherlands",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/nl.png",
        },
        {
          value: "Poland",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/pl.png",
        },
        {
          value: "Portugal",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/pt.png",
        },
        {
          value: "Russia",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/ru.png",
        },
        {
          value: "Romania",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/ro.png",
        },
        {
          value: "Slovakia",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/sk.png",
        },
        {
          value: "Slovenia",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/si.png",
        },
        {
          value: "Spain",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/es.png",
        },
        {
          value: "Sweden",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/se.png",
        },
        {
          value: "United Kingdom",
          src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/gb.png",
        },
      ]
    };
  },
  mounted() {
    this.form = new Form(this.$refs.node, {
      padding: 40,
      width: "auto",
      rows: [
        {
          cols: [
            {
              width: "48%",
              name: "name",
              type: "input",
              label: "Name",
              placeholder: "Type text",
              required: true,
            },
            {
              type: "spacer",
            },
            {
              width: "48%",
              name: "surname",
              type: "input",
              label: "Surname",
              placeholder: "Type text",
              required: true,
            },
          ],
        },
        {
          name: "country",
          type: "combo",
          label: "Country",
          placeholder: "Click to select",
          multiselection: true,
          value: ["austria", "estonia"],
          data: this.country,
        },
        {
          name: "birth",
          type: "datepicker",
          label: "Date of Birth",
          placeholder: "Type text",
          value: new Date(),
        },
        {
          name: "career",
          type: "input",
          label: "Career objective",
          placeholder: "Type text",
          helpMessage: " Help information",
        },
        {
          name: "motivation",
          type: "textarea",
          label: "Motivation",
          placeholder: "Type text here",
        },
        {
          name: "language",
          type: "radioGroup",
          label: "Language level",
          value: "1",
          options: {
            cols: [
              {
                type: "radioButton",
                text: "Elementary",
                value: "1",
              },
              {
                type: "radioButton",
                text: "Intermediate",
                value: "2",
              },
              {
                type: "radioButton",
                text: "Advanced",
                value: "2",
              },
            ],
          },
        },
        {
          name: "backgroundColor",
          type: "colorpicker",
          label: "Background color",
          placeholder: "Click to change",
        },
        {
          name: "offices",
          type: "combo",
          label: "Offices",
          placeholder: "You can select several offices",
          multiselection: true,
          data: this.country,
        },
        {
          name: "attachDocument",
          type: "simpleVault",
          label: "Attach document",
        },
        {
          name: "howToContact",
          type: "checkboxGroup",
          label: "How to contact you",
          options: {
            cols: [
              {
                id: "1",
                type: "checkbox",
                text: "Phone",
                checked: true,
              },
              {
                id: "2",
                type: "checkbox",
                text: "Mail",
              },
              {
                id: "3",
                type: "checkbox",
                text: "Messenger",
              },
              {
                id: "4",
                type: "checkbox",
                text: "Your option",
              },
            ],
          },
        },
      ],
    });
  },
  beforeDestroy() {
    this.form?.destructor();
  }
};
</script>
