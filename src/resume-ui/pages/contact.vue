<template lang="pug">
.bg-white.shadow.p-6.mx-36.mt-20.rounded-xl
  span.text-4xl  get in touch
  .flex.justify-around.align-middle.items-center
    ContactForm
  .flex.mt-12.space-x-48.justify-center
    .cursor-pointer(v-for='button in buttons' @click='gotoUrl(button.link)')
      div
        font-awesome-icon.text-5xl(v-if="!button.icon.includes('img')" :icon='`fa-brands fa-${button.icon}`')
        img.w-12.h-12.rounded-2xl.grayscale.ml-3(v-else='' v-bind:src="'_nuxt/assets/img/companies/' + button.icon + '.png'")
      span {{button.name}}
</template>

<script>
    import ContactForm from "@/components/molecules/contact/form"
    export default defineComponent({
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
        },
        components: {
            ContactForm
        },
        methods: {
            gotoUrl(link) {
                window.open(link)
            }
        }
    })
</script>