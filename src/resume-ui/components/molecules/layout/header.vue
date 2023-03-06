<template lang="pug">
header.flex.items-center.justify-end.mr-8(:style='styleObject')
  .hidden(class='md:block')
    .flex.items-baseline.space-x-6
      HeaderButton(v-for='button in headerButtons', :title='button.title', :redirectPath='button.redirectPath', v-if="headerButtons")
</template>

<script>
import HeaderButton from "~/components/atoms/header-button.vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      headerButtons: [
        {
          title: "about me",
          redirectPath: "/about",
        },
        {
          title: "resume",
          redirectPath: "/resume",
        },
        {
          title: "portfolio",
          redirectPath: "/portfolio",
        },
        {
          title: "skills",
          redirectPath: "/skills",
        },
        {
          title: "articles",
          redirectPath: "/articles",
        },
        {
          title: "demos",
          redirectPath: "/demos",
        },
        {
          title: "contact",
          redirectPath: "/contact",
        }
      ],
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
