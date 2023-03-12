<template lang="pug">
section.flex.justify-center.items-center.h-screen.flex-col.space-y-0
  .mx-6.px-6.text-6xl.h-28
    | {{ &quot;Hi!&quot; }}
  .mx-6.px-6.text-6xl.h-60
    | {{ title }}
  img.w-40.h-40.rounded-3xl.grayscale-100(v-bind:src="'_nuxt/assets/img/me/memoji-wink.png'")
section.flex.h-screen-half(data-aos='zoom-out-up' data-aos-offset='500' data-aos-duration='300' data-aos-easing='ease-in-sine' data-aos-anchor-placement='top-bottom')
  .mx-6.px-6.text-2xl.flex.flex-col.items-center.space-y-40(:style='styleObject')
    .mx-80
      span {{ desc }}
    .flex.flex-row.items-center.justify-end.space-x-40
      div &#x1F4CD; Live in Santiago de Chile
      div &#x1F4BB; Work in Santiago de Chile
      div &#x1F579;&#xFE0F; Esports Fan
    img.w-40.h-40.rounded-3xl.grayscale-100(v-bind:src="'_nuxt/assets/img/me/memoji-mac.png'")
section.flex.h-screen-half.flex-col.space-y-40(data-aos='zoom-out-up' data-aos-offset='500' data-aos-duration='300' data-aos-easing='ease-in-sine' data-aos-anchor-placement='top-bottom')
  .mx-6.px-6.flex.text-2xl.flex-col.items-center.space-y-10(:style='styleObject')
    .mx-80.text-4xl
      span I worked in the development of projects for:
    .flex.flex-row.items-center.justify-end.space-x-10
      .transition.ease-in-out.duration-100.cursor-pointer(v-for='(company, index) in companies' class='grayscale hover:grayscale-0 hover:-translate-y-1 hover:scale-110' :class="index % 2 == 1 ? 'mt-12' : ''" @click='goToCompanyLanding(company.landing)')
        .flex.items-center.justify-center
          img.w-20.h-20.rounded-3xl.grayscale-100(v-bind:src="'_nuxt/assets/img/companies/' + company.imagePath")
        .text-xl.text-center.mt-2 {{ company.name }}
  .mx-6.px-6.flex.text-2xl.flex-col.items-center.space-y-10.mb-80(:style='styleObject')
    .mx-80.text-4xl
      span With:
    .flex.flex-row.items-center.justify-end.space-x-10
      .transition.ease-in-out.duration-100.cursor-pointer(v-for='(language, index) in languages' class='grayscale hover:-translate-y-1 hover:grayscale-0 hover:scale-110' :class="index % 2 != 1 ? 'mt-12' : ''" @click='goTolanguagePortfolio(language.id)')
        .flex.justify-center
          i(:class='`devicon-${language.id}-plain colored text-7xl`')
        .text-xl.text-center.mt-2 {{ language.name }}

</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default defineComponent({
  name: "about-me",
  data() {
    return {
      title: "I’m Jeferson Agudelo, and I’m a Software Engineer.",
      desc: "I am a Software developer with more than 5 years of experience, passionate about technology and programming, I like to learn, update myself daily with new methodologies to innovate and solve problems, I am not a genius but someone committed who constantly improves, with high analytical skills and understanding.",
      companies: [
        {
          id: "falabella",
          name: "Falabella Corp",
          imagePath: "falabella.png",
          landing:
            "https://investors.falabella.com/Spanish/inicio/default.aspx",
        },
        {
          id: "sodimac",
          name: "Sodimac",
          imagePath: "sodimac.png",
          landing:
            "https://sodimac.falabella.com/sodimac-cl/page/nuestra-empresa",
        },
        {
          id: "volta",
          name: "Volta",
          imagePath: "volta.png",
          landing: "https://www.voltachile.cl/",
        },
        {
          id: "sermecoop",
          name: "Sermecoop",
          imagePath: "sermecoop.png",
          landing: "https://www.sermecoop.cl/",
        },
        {
          id: "vtr",
          name: "VTR",
          imagePath: "vtr.png",
          landing: "https://vtr.com/",
        },
        {
          id: "jidoit",
          name: "Jidoit",
          imagePath: "jidoit.png",
          landing: "https://www.jidoit.com/",
        },
        {
          id: "claro",
          name: "Claro",
          imagePath: "claro.png",
          landing: "https://www.clarochile.cl/personas/",
        },
        {
          id: "vitamina",
          name: "Vitamina",
          imagePath: "vitamina.png",
          landing: "https://www.vitamina.cl/",
        },
        {
          id: "chilquinta",
          name: "Chilquinta",
          imagePath: "chilquinta.png",
          landing: "https://www.chilquinta.cl/",
        },
      ],
      sectionStyle: {
        height: "100vh",
      },
      languages: [
        {
          id: "nestjs",
          name: "Nest JS",
        },
        {
          id: "spring",
          name: "Spring Boot",
        },
        {
          id: "go",
          name: "Go",
        },
        {
          id: "vuejs",
          name: "Vue 3",
        },
        {
          id: "angularjs",
          name: "Angular",
        },
        {
          id: "android",
          name: "Android",
        },
        {
          id: "googlecloud",
          name: "Google Cloud",
        },
        {
          id: "amazonwebservices",
          name: "Amazon Web Services",
        },
        {
          id: "terraform",
          name: "Terraform",
        },
      ],
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
