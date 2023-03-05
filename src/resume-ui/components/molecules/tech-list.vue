<template lang="pug">
.flex.flex-row.items-center.justify-center.space-x-10
  .transition.ease-in-out.duration-100.cursor-pointer.grayscale(v-for='(tech, index) in techList' class='hover:-translate-y-1 hover:scale-110' :class="{ 'grayscale-0': selectedTechId === tech.id || colored }" @click='choose(tech.id)')
    .flex.justify-center
      i(:class='`devicon-${tech.id}-plain colored text-4xl`')
      img.w-10.h-10.rounded-2xl.grayscale-100(v-if="tech.id.includes('-img')" v-bind:src="'_nuxt/assets/img/tech/' + tech.id + '.png'")
</template>

<script>
export default defineComponent({
  name: "tech-list",
  data() {
    return {
      selectedTechId: null,
    };
  },
  methods: {
    choose(techId) {
      if (this.selectedTechId !== techId) {
        this.selectedTechId = techId;
        this.$emit("choose-tech", techId);
      } else {
        this.selectedTechId = null;
        this.$emit("choose-tech", null);
      }
    },
  },
  props: {
    techList: {
      type: Array,
      required: true,
    },
    colored: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
