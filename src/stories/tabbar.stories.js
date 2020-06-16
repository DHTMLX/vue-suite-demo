import TabbarBase from '../components/tabbar/TabbarBase';
import TabbarConfigurated from '../components/tabbar/TabbarConfigurated';
import TabbarCdn from '../components/tabbar/TabbarCdn';
import TabbarEvents from '../components/tabbar/TabbarEvents';

export default {
    title: "Tabbar",
};

export const base = () => ({
  components: { TabbarBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TabbarBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <TabbarBase></TabbarBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { TabbarConfigurated },
  data: () => ({
    options: {
      mode: 'top',
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      closeButtons: true,
      disabled: ["Vilnius", "London"],
      activeTab: "Paris",
      views: [
        {
          id: 'Vilnius',
          tab: 'Vilnius',
          html:
              '<div><p style=\'font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px\'><strong>Vilnius(Lithuanian pronunciation: [ˈvʲɪlʲnʲʊs]</strong> , see also other names) is the capital of Lithuania and its largest city, with a population of 574,147 as of 2018. Vilnius is in the southeast part of Lithuania and is the second largest city in the Baltic states. Vilnius is the seat of the main government institutions of Lithuania and the Vilnius District Municipality.</p></div>',
        },
        {
          id: 'Paris',
          tab: 'Paris',
          html:
              '<div><p style=\'font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px\'><strong>Paris (French pronunciation: ​[paʁi]</strong> is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and an official estimated population of 2,140,526 residents as of 1 January 2019. Since the 17th century, Paris has been one of Europe\'s major centres of finance, diplomacy, commerce, fashion, science, as well as the arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2019 population of 12,213,364, or about 18 percent of the population of France.</p></div>',
        },
        {
          id: 'London',
          tab: 'London',
          html:
              '<div><p style=\'font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px\'><strong>London</strong> is the capital and largest city of both England and the United Kingdom, as well as the largest city within the European Union. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans</p></div>',
        },
        {
          id: 'Rome',
          tab: 'Rome',
          html:
              '<div><p style=\'font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px\'><strong>Rome (Latin and Italian: Roma [ˈroːma]</strong> is the capital city and a special comune of Italy (named Comune di Roma Capitale). Rome also serves as the capital of the Lazio region. With 2,872,800 residents in 1,285 km2 (496.1 sq mi), it is also the country\'s most populated comune. It is the fourth most populous city in the European Union by population within city limits. It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents, thus making it the most populous metropolitan city in Italy.</p></div>',
        },
      ]
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TabbarConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <TabbarConfigurated :options="options"></TabbarConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { TabbarCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TabbarCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <TabbarCdn></TabbarCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { TabbarEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TabbarEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <TabbarEvents></TabbarEvents>
    </section>
  `,
});
