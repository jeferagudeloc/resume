<template>
    <div class="transition ease-in-out hover:-translate-y-0.5 duration-100">
        <a :style="headerButtonStyle" :class="{ 'isActive' : isActive }" v-if="redirectPath.includes('http')" target="_blank" :href="redirectPath"> {{title}} </a>
        <NuxtLink :style="headerButtonStyle" :class="{ 'isActive' : isActive }" v-else href="#" class="px-3 py-2 rounded-md text-sm" :to="redirectPath">{{title}}</NuxtLink>
    </div>
</template>

<script>
export default defineComponent({
    name: 'header-button',
    data() {
        return {
            headerButtonStyle: {
                fontSize: '16px',
                height: '80px',
                color: '#b3b3b3'
            }
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        redirectPath: {
            type: String,
            required: true,
        },
        
    },
    computed: {
        isActive() {
            return `/${this.$route.name}` == this.redirectPath
        }
    }
})

</script>

<style scoped>

.isActive {
    color: #000 !important;
}

</style>