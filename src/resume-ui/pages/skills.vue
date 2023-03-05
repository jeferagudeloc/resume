<template lang="pug">
.flex.justify-center
  select#1(name='x' v-model='selected')
    option(value='dev') dev skills
    option(value='cloud') cloud skills
.flex.flex-col.mt-12.px-40(v-if="selected == 'dev'")
  .rounded-lg.bg-gray-100.shadow-lg.p-6
    h2.text-2xl.mb-8 Frontend
    TechList(:colored='true' :techList='frontendLanguages')
    highchart(:options='chartOptionsFront')
  .rounded-lg.bg-gray-100.shadow-lg.p-6.mt-12
    h2.text-2xl.mb-8 Backend
    TechList(:colored='true' :techList='backendLanguages')
    highchart(:options='chartOptionsBack')
.flex.flex-col.mt-12.px-40(v-if="selected == 'cloud'")
  .rounded-lg.bg-gray-100.shadow-lg.p-6
    h2.text-2xl.mb-8 Cloud
    TechList(:colored='true' :techList='cloudPlatforms')
    highchart(:options='chartOptionsCloud')

</template>

<script>
  import {
    CHART_OPTIONS_FRONT,
    CHART_OPTIONS_BACK,
    CHART_OPTIONS_CLOUD,
  } from "@/utils/constants/charts";
  import TechList from "~/components/molecules/tech-list.vue";
  export default defineComponent({
    data() {
      return {
        selected: "dev",
        chartOptionsFront: CHART_OPTIONS_FRONT,
        chartOptionsBack: CHART_OPTIONS_BACK,
        chartOptionsCloud: CHART_OPTIONS_CLOUD,
        frontendLanguages: [{
            id: "vuejs",
            name: "Vue 3",
          },
          {
            id: "angularjs-img",
            name: "Angular JS",
          },
          {
            id: "angularjs",
            name: "Angular",
          },
          {
            id: "nuxtjs",
            name: "NuxtJS",
          },
          {
            id: "react",
            name: "ReactJS",
          },
          {
            id: "vuex-img",
            name: "VuexJS",
          },
          {
            id: "cypress-img",
            name: "CypressJS",
          }
        ],

        backendLanguages: [{
            id: "nestjs",
            name: "Nest JS",
          },
          {
            id: "csharp",
            name: "CSharp",
          },
          {
            id: "python",
            name: "python",
          },
          {
            id: "spring",
            name: "Spring Boot",
          },
          {
            id: "go",
            name: "Go",
          },
          {
            id: "android",
            name: "Android",
          },
          {
            id: "serverless-img",
            name: "serverless-img",
          },
        ],
        cloudPlatforms: [{
          id: "google",
        }, {
          id: "amazonwebservices",
        }, {
          id: "terraform",
        }]
      };
    },
    components: {
      TechList,
    },
  });
</script>