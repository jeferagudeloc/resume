<template lang="pug">
.transition.ease-in-out.duration-100(class='hover:-translate-y-0.5')
  a(:style='headerButtonStyle' :class='{ isActive: isActive }' v-if="redirectPath.includes('http')" target='_blank' :href='redirectPath')
    | {{ title }}
  NuxtLink.px-3.py-2.rounded-md.text-sm(:style='headerButtonStyle' :class='{ isActive: isActive }' v-else='' href='#' :to='redirectPath') {{ title }}
</template>

<script>
export default defineComponent({
  name: "header-button",
  data() {
    return {
      headerButtonStyle: {
        fontSize: "16px",
        height: "80px",
        color: "#b3b3b3",
      },
    };
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
      return `/${this.$route.name}` == this.redirectPath;
    },
  },
});
</script>

<style scoped>
.isActive {
  color: #000 !important;
}
</style>
