<template>
    <Home />
</template>

<script>
import Home from "~/components/organisms/home.vue"
export default defineComponent({
    name: 'home',
    methods: {
        handleNavigation() {
            this.$router.push("/about")
        }
    },
    components: {
        Home
    }
})
</script>