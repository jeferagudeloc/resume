<template lang="pug">
.flex.m-12.rounded-xl.bg-white.shadow-xl(class='dark:bg-neutral-700 h-1/2')
  .w-80
    img.rounded-l-xl.object-none.h-full.min-w-200(:src='image')
  .pt-6.pl-6
    h5.mb-2.text-xl.font-medium.leading-tight.text-neutral-800(class='dark:text-neutral-50')
      | {{ title }}
    p.mb-4.text-base.text-neutral-600(class='dark:text-neutral-200')
      | {{ description }}
    .w-full.flex.justify-center.pb-6
      div(v-for='techId in techIdList')
        i(v-if="!techId.includes('-original')" :class='`devicon-${techId}-plain colored text-4xl`')
        i(v-if="techId.includes('-original')" :class='`devicon-${techId} colored text-4xl`')
        img.w-10.h-10.rounded-2xl.grayscale-100(v-if="techId.includes('-img')" v-bind:src="'/img/tech/' + techId + '.png'")
  .flex.flex-col.justify-center
    .py-3.px-6.text-center.cursor-pointer(class='dark:text-blue-500')
      a.text-2xl(:href='link' target='redirect')
        font-awesome-icon(icon='fa-brands fa-medium')
</template>

<script>
export default defineComponent({
  name: "article",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    techIdList: {
      type: String,
      required: true,
    },
    pubDate: {
      type: String,
      required: true,
    },
  },
});
</script>
