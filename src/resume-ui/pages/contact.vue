<template lang="pug">
.bg-white.shadow.p-6.mx-36.mt-20.rounded-xl
  span.text-4xl {{ $t('contact.getInTouch') }}
  .flex.justify-around.align-middle.items-center
    ContactForm
  LinkButtons
</template>

<script>
    import ContactForm from "@/components/molecules/contact/form"
    import LinkButtons from "@/components/molecules/common/link-buttons"
    export default defineComponent({
        components: {
            ContactForm,
            LinkButtons
        },
        methods: {
            gotoUrl(link) {
                window.open(link)
            }
        }
    })
</script>