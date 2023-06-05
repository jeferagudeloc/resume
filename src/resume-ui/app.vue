<template lang="pug">
div
  div(v-if="isDesktop")
    NuxtLayout
      Header
      NuxtPage
  div(v-else)
    div.building-icon
      i.fas.fa-hammer
    .flex.justify-center.items-center.h-screen
      .text-2xl.font-bold Mobile section is under construction. 🔨
</template>

<script>
import Header from "~/components/molecules/layout/header.vue";

export default defineComponent({
    name: "app",
    components: {
      Header,
    },
    data() {
      return {
        isDesktop: false,
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isDesktop = window.innerWidth >= 1024;
      },
    },
  });

</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
