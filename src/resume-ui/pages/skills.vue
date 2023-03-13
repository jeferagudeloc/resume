<template lang="pug">
.flex.justify-center
  div.px-12.mt-1.cursor-pointer.text-4xl.text-white(v-for="option in options" :key="option.id" :class="{ 'text-sky-400': selected === option.id }")
    font-awesome-icon.text-md(:icon='`fa-solid fa-${option.icon}`' @click="selected = option.id")
div.text-center.mt-4
  span {{ $t(selected) }}
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
.flex.flex-col.mt-12.px-40(v-if="selected == 'tools'")
  .rounded-lg.bg-gray-100.shadow-lg.p-6
    h2.text-2xl.mb-8 Tools
    TechList(:colored='true' :techList='tools')
    highchart(:options='chartOptionsTools')

</template>

<script>
  import {
    CHART_OPTIONS_FRONT,
    CHART_OPTIONS_BACK,
    CHART_OPTIONS_CLOUD,
    CHART_OPTIONS_TOOLS
  } from "@/constants/charts";
  import { FRONTEND_LANGUAGES } from "@/constants/frontendLanguages.ts";
  import { BACKEND_LANGUAGES, CLOUD_PLATFORMS } from "@/constants/backendLanguages.ts";
  import { TOOLS } from "@/constants/tools.ts";
  import TechList from "~/components/molecules/tech-list.vue";
  export default defineComponent({
    data() {
      return {
        options: [{
          id: "dev",
          icon: "desktop",
        }, {
          id: "cloud",
          icon: "cloud",
        }, {
          id: "tools",
          icon: "toolbox",
        }],
        selected: "dev",
        chartOptionsFront: CHART_OPTIONS_FRONT,
        chartOptionsBack: CHART_OPTIONS_BACK,
        chartOptionsCloud: CHART_OPTIONS_CLOUD,
        frontendLanguages: FRONTEND_LANGUAGES,
        backendLanguages: BACKEND_LANGUAGES,
        cloudPlatforms: CLOUD_PLATFORMS,
        tools: TOOLS,
        chartOptionsTools: CHART_OPTIONS_TOOLS
      };
    },
    components: {
      TechList,
    },
  });
</script>