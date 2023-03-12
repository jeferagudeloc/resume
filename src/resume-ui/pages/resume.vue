<template lang="pug">
.grid.grid-cols-12.gap-12.mx-36.p-6.px-12.mt-16.bg-white.shadow-xl
  .col-span-9(class='sm:col-span-9')
      span.text-4xl.font-semibold Jeferson Agudelo
      br
      span.text-xl.italic Senior Software Engineer
  .col-span-3(class='sm:col-span-3')
    div.mt-1
      font-awesome-icon.text-md(icon='fa-solid fa-square-phone')
      span.ml-3 +56 9 73447713
    div.mt-1
      font-awesome-icon.text-md(icon='fa-solid fa-envelope')
      a(href="mailto:jefersonagudeloc@gmail.com").ml-3.underline jefersonagudeloc@gmail.com
    div.mt-1
      font-awesome-icon.text-md(icon='fa-solid fa-map-pin')
      span.ml-3 Santiago
.grid.grid-cols-12.gap-12.mx-36.p-6.px-12.bg-white.shadow-xl
  .col-span-2(class='sm:col-span-2')
    img.w-36.h-36.ml-16.grayscale.rounded-full(v-bind:src="'_nuxt/assets/img/me/profile.png'")
  .col-span-10(class='sm:col-span-10').mt-6
    span.text-xl I am a Software developer with more than 5 years of experience, passionate about technology and programming, I like to learn, update myself daily with new methodologies to innovate and solve problems, I am not a genius but someone committed who constantly improves, with high analytical skills and understanding.

.grid.grid-cols-12.gap-12.mx-36.p-6.px-12.bg-white.shadow-xl
  .col-span-9(class='sm:col-span-9')
    .text-3xl WORK EXPERIENCES
    .mt-3 
      span.text-xl Senior Software Engineer
      span.float-right.text-gray-600 {{'Falabella 2022 - Present'}}
    .mt-2
      span Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tempora sit similique quod eum dolorum, voluptate reiciendis voluptatum hic unde minima, quos ducimus asperiores cum. Quibusdam quia ipsum atque autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde velit facilis blanditiis, perferendis officiis inventore voluptas explicabo, provident, rem nobis. Recusandae, totam corrupti. Laboriosam distinctio est doloribus molestias odit.
  .col-span-3(class='sm:col-span-3').border-l-2.pl-2
    .text-3xl SKILLS
      .text-xl.font-black Technical
      .text-sm Javacript/Angular/Vue
      .text-sm Golang/Java/Node
      .text-sm PostgreSQL/Mysql/Oracle
      .text-sm Event Driven Design
      .text-sm POO
      .text-sm Unit Test
      
      .text-xl.font-black.mt-3 Proffesional
      .text-sm Soft Skills
      .text-sm Team Player
      .text-sm Effective Communication
LinkButtons
</template>

<script>

import LinkButtons from '@/components/molecules/common/link-buttons'
export default defineComponent({
    name: 'resume',
    components: {
      LinkButtons
    }
})
</script>