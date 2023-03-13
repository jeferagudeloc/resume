<template lang="pug">
header.flex.items-center.justify-end.mr-8(:style='styleObject')
  form.p-6
    select#locale-select(v-model='$i18n.locale')
      option(value='EN') EN
      option(value='ES') ES
      option(value='PT') PT
    font-awesome-icon.ml-4.text-md(icon='fa-solid fa-globe')
  .hidden(class='md:block')
    .flex.items-baseline.space-x-6
      HeaderButton(v-for='button in headerButtons', :title='$t(button.title)', :redirectPath='button.redirectPath', v-if="headerButtons")
</template>

<script>
import HeaderButton from "~/components/atoms/header-button.vue";
import { HEADER_BUTTONS } from "@/constants/headerButtons.ts"

export default defineComponent({
  name: "Header",
  data() {
    return {
      headerButtons: HEADER_BUTTONS,
      styleObject: {
        fontSize: "13px",
        height: "80px",
      },
    };
  },
  components: {
    HeaderButton,
  },
});
</script>
