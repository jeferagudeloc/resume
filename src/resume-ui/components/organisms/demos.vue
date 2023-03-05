<template lang="pug">
div
  .flex.flex-row.justify-center
    .text-2xl.text-gray-900.text-center this is what i do in
    select.ml-2(v-model='selected')
      option(value='front') front
      option(value='back') back
      option(value='cloud') cloud
  .flex.flex-col.mt-12.px-40(v-if="selected == 'front'")
    .rounded-lg.bg-gray-100.shadow-lg.p-6
      FrontExperience
  .flex.flex-col.mt-12.px-40(v-if="selected == 'back'")
    .rounded-lg.bg-gray-100.shadow-lg.p-6
      BackExperience
  .flex.flex-col.mt-12.px-40(v-if="selected == 'cloud'")
    .rounded-lg.bg-gray-100.shadow-lg.p-6
      CloudExperience
</template>
<script>
  import FrontExperience from "~/components/molecules/experience/front.vue";
  import BackExperience from "~/components/molecules/experience/back.vue";
  import CloudExperience from "~/components/molecules/experience/cloud.vue";
  export default defineComponent({
    name: "tabs",
    data() {
      return {
        selected: 'front',
      }
    },
    components: {
      FrontExperience,
      BackExperience,
      CloudExperience
    },
  });
</script>