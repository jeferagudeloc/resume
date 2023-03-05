<template lang="pug">
.text-center.mt-6(v-if='selectedTechId')
  | filter by: {{ selectedTechId }}
.flex.justify-center.space-x-60.mt-6(data-aos='zoom-out-up' data-aos-offset='500' data-aos-duration='300' data-aos-easing='ease-in-sine' data-aos-anchor-placement='top-bottom' v-if='viewDetailsProject')
  .columns-1.rounded-xl.bg-white.shadow-xl(class='w-4/5 dark:bg-neutral-700 h-1/2')
    div
      .flex.items-center.justify-center.mt-6
        img.w-20.h-20.rounded-3xl.grayscale-100(v-bind:src="\
        '_nuxt/assets/img/companies/' +\
        viewDetailsProject.companyId +\
        '.png'\
        ")
      .p-6
        h5.mb-2.text-xl.font-medium.leading-tight.text-neutral-800.text-center(class='dark:text-neutral-50')
          | {{ viewDetailsProject.title }}
        p.mb-2.text-base.text-neutral-600.text-center(class='dark:text-neutral-200')
          | {{ viewDetailsProject.description }}
      .mx-6
        span(class='dark:text-neutral-100')
          | {{ viewDetailsProject.projectDetail.technicalDescription }}
    div
      .flex.justify-center.space-x-6.mb-6.mt-6
        div(v-for='techId in viewDetailsProject.projectDetail.techIdList')
          i(v-if="!techId.includes('-original')" :class='`devicon-${techId}-plain colored text-4xl`')
          i(v-if="techId.includes('-original')" :class='`devicon-${techId} colored text-4xl`')
          img.w-10.h-10.rounded-2xl.grayscale-100(v-if="techId.includes('-img')" v-bind:src="'_nuxt/assets/img/tech/' + techId + '.png'")
      .flex.justify-center.items-center.border-t-2.border-neutral-100.py-3.px-6.mt-auto.text-center.cursor-pointer(class='dark:border-neutral-600 dark:text-neutral-50' @click='setStyle(viewDetailsProject)')
        span  Hide detail 
.flex.flex-wrap.justify-center.mt-6
  .max-w-sm.rounded-xl.bg-white.shadow-xl.mb-6.mr-6.flex.flex-col(v-for='project in filteredProjects' class='dark:bg-neutral-700')
    img.rounded-t-xl(v-bind:src='`_nuxt/assets/img/projects/${project.imageId}`')
    .p-6
      h5.mb-2.text-xl.font-medium.leading-tight.text-neutral-800(class='dark:text-neutral-50')
        | {{ project.title }}
      p.mb-4.text-base.text-neutral-600(class='dark:text-neutral-200')
        | {{ project.description }}
    .flex.flex-wrap.justify-center.space-x-6.mb-6
      div(v-for='techId in project.projectDetail.techIdList')
        i(v-if="!techId.includes('-original')" :class='`devicon-${techId}-plain colored text-4xl`')
        i(v-if="techId.includes('-original')" :class='`devicon-${techId} colored text-4xl`')
        img.w-10.h-10.rounded-2xl.grayscale-100(v-if="techId.includes('-img')" v-bind:src="'_nuxt/assets/img/tech/' + techId + '.png'")
    .columns-2.mt-auto.mb-2
      .text-base.text-neutral-600.text-center(class='dark:text-neutral-200')
        | from: {{ project.initialDate }}
      .text-base.text-neutral-600.text-center(class='dark:text-neutral-200')
        | to: {{ project.finishDate ? project.finishDate : &quot;current&quot; }}
    .border-t-2.border-neutral-100.py-3.px-6.text-center.cursor-pointer(class='dark:border-neutral-600 dark:text-neutral-50' @click='setStyle(project)')
      span  View detail 
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default defineComponent({
  name: "project-list",
  data() {
    return {
      viewDetailsProject: null,
      cardOpenStyle: {
        width: "100%",
      },
      cardNormalStyle: {
        width: "auto",
      },
    };
  },
  props: {
    projectList: {
      type: Array,
      required: true,
    },
    selectedTechId: {
      type: String,
      required: false,
    },
  },
  methods: {
    setStyle(viewDetailsProject) {
      if (this.viewDetailsProject !== viewDetailsProject) {
        window.scrollTo(0, 0);
        this.viewDetailsProject = viewDetailsProject;
      } else {
        this.viewDetailsProject = null;
      }
    },
  },
  mounted() {
    AOS.init({});
  },
  computed: {
    filteredProjects() {
      return this.selectedTechId == null
        ? this.projectList
        : this.projectList.filter((x) =>
            x.projectDetail.techIdList.includes(this.selectedTechId)
          );
    },
  },
});
</script>
