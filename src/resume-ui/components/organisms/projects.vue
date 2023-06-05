<template lang="pug">
TechList(:techList='languages' @choose-tech='updateSelectedTechId')
ProjectList(:projectList='projectList' :selectedTechId='selectedTechId')

</template>

<script>
import TechList from "~/components/molecules/tech-list.vue";
import ProjectList from "~/components/molecules/project-list.vue";
import { MAIN_LANGUAGES } from '@/constants/mainLanguages.ts'
export default defineComponent({
  name: "projects",
  data() {
    return {
      projectList: [
        {
          title:
            "Product & Pricing Portfolio - FTCProduct & Pricing Portfolio - FTC",
          description:
            "Parte del equipo de desarrollo, participo en la implementación de los diferentes requerimientos hacia el producto.",
          projectDetail: {
            technicalDescription:
              "Bajo una arquitectura orientada a eventos, se está trabajando con diferentes micro-servicios desarrollados en Golang, Micronaut y Spring Boot para el backend. Para la interfaz de usuario, se está trabajando con Micro Frontend usando: Webpack 5, Module Federation, y Vue 3, aplicando Atomic Design para manejar las distintas funcionalidades.Parte del equipo de desarrollo, participo en la implementación de los diferentes requerimientos hacia el producto. Bajo una arquitectura orientada a eventos, se está trabajando con diferentes micro-servicios desarrollados en Golang, Micronaut y Spring Boot para el backend. Para la interfaz de usuario, se está trabajando con Micro Frontend usando: Webpack 5, Module Federation, y Vue 3, aplicando Atomic Design para manejar las distintas funcionalidades.",
            techIdList: [
              "golang",
              "micronaut",
              "spring-boot",
              "webpack",
              "vuejs",
            ],
          },
          initialDate: "jun. 2022",
          finishDate: null,
          companyId: "falabella",
        },
      ],
      languages: MAIN_LANGUAGES,
      selectedTechId: null,
    };
  },
  methods: {
    async getProjects() {
      await this.$api.get("http://localhost:8080/projects").then((response) => {
        this.projectList = response.data;
      });
    },
    updateSelectedTechId(selectedTechId) {
      this.selectedTechId = selectedTechId;
    },
  },
  components: {
    TechList,
    ProjectList,
  },
  mounted() {
    this.getProjects();
  },
});
</script>
