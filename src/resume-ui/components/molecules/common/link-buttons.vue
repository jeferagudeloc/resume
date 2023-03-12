<template lang="pug">
.mx-36.p-6.px-12.bg-white
  .flex.space-x-48.justify-center
    .cursor-pointer(v-for='button in buttons' @click='gotoUrl(button.link)')
      div
        font-awesome-icon.text-5xl(v-if="!button.icon.includes('img')" :icon='`fa-brands fa-${button.icon}`')
        img.w-12.h-12.rounded-2xl.grayscale.ml-3(v-else='' v-bind:src="'_nuxt/assets/img/companies/' + button.icon + '.png'")
      span {{button.name}}
</template>

<script>
export default defineComponent({
  name: 'link-buttons',
   data() {
      return {
          buttons: [{
                    link: "https://twitter.com/jeferagudeloc",
                    name: "twitter",
                    icon: "twitter"
                },{
                    link: "https://radar.thoughtworks.com/?sheetId=https://docs.google.com/spreadsheets/d/1QpAKWnaowDmM-cw01Ql1XbAfwXVI4sV7fFRTiwYtdWY/edit#gid=0&sheetName=jefersonagudeloc",
                    name: "techRadar",
                    icon: "thoughtworks-img"
                }, {
                    link: "https://medium.com/@jeferagudeloc",
                    name: "medium",
                    icon: "medium"
                }, {
                    link: "https://github.com/jeferagudeloc",
                    name: "github",
                    icon: "github"
                }, {
                    link: "https://www.linkedin.com/in/jefersonagudelo/",
                    name: "linkedin",
                    icon: "linkedin"
                }]
      }
    }
})
</script>