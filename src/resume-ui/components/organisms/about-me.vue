<template lang="pug">
section.flex.justify-center.items-center.h-screen.flex-col.space-y-0
  .mx-6.px-6.text-6xl.h-28
    | {{ $t('aboutMe.hi') }}
  .mx-6.px-6.text-6xl.h-60
    | {{ $t('aboutMe.iAm') }}
  img.w-40.h-40.rounded-3xl.grayscale-100(v-bind:src="'/img/me/memoji-wink.png'")
section.flex.h-screen-half(data-aos='zoom-out-up' data-aos-offset='500' data-aos-duration='300' data-aos-easing='ease-in-sine' data-aos-anchor-placement='top-bottom')
  .text-2xl.flex.flex-col.items-center.space-y-40(:style='styleObject')
    .mx-20
      span {{ $t('aboutMe.desc') }}
    .flex.flex-row.items-center.justify-end.space-x-40
      div {{ $t('aboutMe.liveIn') }}
      div {{ $t('aboutMe.workIn') }}
      div {{ $t('aboutMe.fanOf' )}}
    img.w-40.h-40.rounded-3xl.grayscale-100(v-bind:src="'/img/me/memoji-mac.png'")
section.flex.h-screen-half.flex-col.space-y-40(data-aos='zoom-out-up' data-aos-offset='500' data-aos-duration='300' data-aos-easing='ease-in-sine' data-aos-anchor-placement='top-bottom')
  .mx-6.px-6.flex.text-2xl.flex-col.items-center.space-y-10(:style='styleObject')
    .mx-80.text-4xl
      span {{ $t('aboutMe.iWorked') }}
    .flex.flex-row.items-center.justify-end.space-x-10
      .transition.ease-in-out.duration-100.cursor-pointer(v-for='(company, index) in companies' class='grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110' :class="index % 2 == 1 ? 'mt-12' : ''" @click='goToCompanyLanding(company.landing)')
        .flex.items-center.justify-center
          img.w-20.h-20.rounded-3xl.grayscale-100(v-bind:src="'/img/companies/' + company.imagePath")
        .text-xl.text-center.mt-2 {{ company.name }}
  .mx-6.px-6.flex.text-2xl.flex-col.items-center.space-y-10.mb-80(:style='styleObject')
    .mx-80.text-4xl
      span {{ $t('aboutMe.with') }}
    .flex.flex-row.items-center.justify-end.space-x-10
      .transition.ease-in-out.duration-100.cursor-pointer(v-for='(language, index) in languages' class='grayscale hover:-translate-y-1 hover:grayscale-0 hover:scale-110' :class="index % 2 != 1 ? 'mt-12' : ''" @click='goTolanguagePortfolio(language.id)')
        .flex.justify-center
          i(:class='`devicon-${language.id}-plain colored text-7xl`')
        .text-xl.text-center.mt-2 {{ language.name }}

</template>



<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { MAIN_LANGUAGES } from '@/constants/mainLanguages.ts'
import { COMPANIES } from '@/constants/companies.ts'

export default defineComponent({
  name: "about-me",
  data() {
    return {
      title: "I’m Jeferson Agudelo, and I’m a Software Engineer.",
      desc: "I am a Software developer with more than 6 years of experience, passionate about technology and programming, I like to learn, update myself daily with new methodologies to innovate and solve problems, I am not a genius but someone committed who constantly improves, with high analytical skills and understanding.",
      companies: COMPANIES,
      sectionStyle: {
        height: "100vh",
      },
      languages: MAIN_LANGUAGES
    };
  },
  methods: {
    goToCompanyLanding(landingUrl) {
      window.open(landingUrl);
    },
    goTolanguagePortfolio(languageId) {
      this.$router.push({
        path: "/portfolio",
      });
    },
  },
  mounted() {
    AOS.init({});
  },
});
</script>
