<template>
    <header class="flex items-center justify-end mr-8" :style="styleObject">
        <div class="hidden md:block">
            <div class="flex items-baseline space-x-6">
                <HeaderButton v-for="button in headerButtons" :title="button.title" :redirectPath="button.redirectPath" />
            </div>
        </div>
    </header>
</template>

<script>

import HeaderButton from "~/components/atoms/header-button.vue"

export default defineComponent({
    name: 'Header',
    data() {
        return {
            headerButtons: [
                {
                    title: 'about me',
                    redirectPath: '/about'
                },
                {
                    title: 'portfolio',
                    redirectPath: '/portfolio'
                },
                {
                    title: 'skills',
                    redirectPath: '/skills'
                },
                {
                    title: 'articles',
                    redirectPath: '/articles'
                },
                {
                    title: 'tech radar',
                    redirectPath: 'https://radar.thoughtworks.com/?sheetId=https://docs.google.com/spreadsheets/d/1QpAKWnaowDmM-cw01Ql1XbAfwXVI4sV7fFRTiwYtdWY/edit#gid=0&sheetName=jefersonagudeloc'
                },
                {
                    title: 'demos',
                    redirectPath: '/demos'
                },
            ],
            styleObject: {
                fontSize: '13px',
                height: '80px'
            }
        }
    },
    components: {
        HeaderButton
    }
})

</script>