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
    img.w-36.h-36.ml-16.grayscale.rounded-full(v-bind:src="'/img/me/profile.png'")
  .col-span-10(class='sm:col-span-10').mt-6
    span.text-xl {{ $t('resume.overview') }}

.grid.grid-cols-12.gap-12.mx-36.p-6.px-12.bg-white.shadow-xl
  .col-span-9(class='sm:col-span-9')
    .text-3xl {{ $t('resume.workExperiences') }}
    .mt-3(v-for="workExperience in workExperiences" :key="workExperience.company")
        span.text-xl.work-title {{ workExperience.position }}
        span.text-gray-600.float-right {{ workExperience.company }} ({{ workExperience.dateRange }})
        br
        span.work-description {{ workExperience.description }}
  .col-span-3(class='sm:col-span-3').border-l-2.pl-2
    .text-3xl {{ $t('resume.skills') }}
      .text-xl.font-black {{ $t('resume.technical') }}
      .text-sm Javacript/Angular/Vue
      .text-sm Golang/Java/Node
      .text-sm PostgreSQL/Mysql/Oracle
      .text-sm Event Driven Design
      .text-sm POO
      .text-sm Unit Test
      
      .text-xl.font-black.mt-3 {{ $t('resume.proffesional') }}
      .text-sm {{ $t('resume.teamPlayer') }}
      .text-sm {{ $t('resume.effectiveComunication') }}
LinkButtons
</template>

<script>


import LinkButtons from '@/components/molecules/common/link-buttons'
export default defineComponent({
  data() {
    return {
       workExperiences: [
        {
          position: 'Senior Software Engineer',
          company: 'Falabella',
          dateRange: 'Jun 2022 - Present',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          position: 'Full Stack Developer',
          company: 'Karibu',
          dateRange: 'Apr 2017 - Jun 2022',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
      ],
      technicalSkills: [
        'Javacript/Angular/Vue',
        'Golang/Java/Node',
        'PostgreSQL/Mysql/Oracle',
        'Event Driven Design',
        'POO',
        'Unit Test',
      ],
      professionalSkills: [
        'Team Player',
        'Effective Communication',
      ],
    }
  },
    name: 'resume',
    components: {
      LinkButtons
    }
})
</script>