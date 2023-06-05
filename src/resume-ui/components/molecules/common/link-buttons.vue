<template lang="pug">
.mx-36.p-6.px-12
  .flex.space-x-48.justify-center
    .cursor-pointer(v-for='button in buttons' @click='gotoUrl(button.link)')
      div
        font-awesome-icon.text-5xl(v-if="!button.icon.includes('img')" :icon='`fa-brands fa-${button.icon}`')
        img.w-12.h-12.rounded-2xl.grayscale.ml-3(v-else='' v-bind:src="'/img/companies/' + button.icon + '.png'")
      span {{button.name}}
</template>

<script>

import { LINK_BUTTON_LIST } from '@/constants/linkButtonList.ts'
export default defineComponent({
  name: 'link-buttons',
   data() {
      return {
          buttons: LINK_BUTTON_LIST
      }
    },
    methods: {
      gotoUrl(link) {
          window.open(link)
      }
    }
})
</script>