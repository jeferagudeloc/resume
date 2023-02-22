<template>
    <TechList :techList="languages" @choose-tech="updateSelectedTechId" />
    <ProjectList :projectList="projectList" :selectedTechId="selectedTechId" />
</template>

<script>
import TechList from "~/components/molecules/tech-list.vue"
import ProjectList from "~/components/molecules/project-list.vue"
export default defineComponent({
    name: 'projects',
    data() {
        return {
            projectList: [{
            title: "Product & Pricing Portfolio - FTCProduct & Pricing Portfolio - FTC",
            description: "Parte del equipo de desarrollo, participó en la implementación de los diferentes requerimientos hacia el producto.",
            projectDetail: {
                technicalDescription: "Bajo una arquitectura orientada a eventos, se está trabajando con diferentes micro-servicios desarrollados en Golang, Micronaut y Spring Boot para el backend. Para la interfaz de usuario, se está trabajando con Micro Frontend usando: Webpack 5, Module Federation, y Vue 3, aplicando Atomic Design para manejar las distintas funcionalidades.Parte del equipo de desarrollo, participó en la implementación de los diferentes requerimientos hacia el producto. Bajo una arquitectura orientada a eventos, se está trabajando con diferentes micro-servicios desarrollados en Golang, Micronaut y Spring Boot para el backend. Para la interfaz de usuario, se está trabajando con Micro Frontend usando: Webpack 5, Module Federation, y Vue 3, aplicando Atomic Design para manejar las distintas funcionalidades.",
                techIdList: [
                    "golang",
                    "micronaut",
                    "spring-boot",
                    "webpack",
                    "vuejs"
                ]
            },
            initialDate: "jun. 2022",
            finishDate: null,
            companyId: "falabella"
        }],
        languages: [{
                    id: 'nestjs',
                    name: "Nest JS",
                }, {
                    id: 'spring',
                    name: "Spring Boot",
                }, {
                    id: 'go',
                    name: "Go",
                }, {
                    id: 'vuejs',
                    name: "Vue 3",
                }, {
                    id: 'angularjs',
                    name: "Angular",
                }, {
                    id: 'android',
                    name: "Android",
                }, {
                    id: 'googlecloud',
                    name: "Google Cloud",
                }, {
                    id: 'nuxtjs',
                    name: "NuxtJS",
                }, {
                    id: 'amazonwebservices',
                    name: "Amazon Web Services",
                }, {
                    id: 'terraform',
                    name: "Terraform",
                }],
                selectedTechId: null
        }
    },
    methods: {
        async getProjects() {
            await this.$api.get("http://localhost:8080/projects").then((response) => {
                this.projectList = response.data;
            });
        },
        updateSelectedTechId(selectedTechId) {
            this.selectedTechId = selectedTechId;
        }
    },
    components: {
        TechList,
        ProjectList
    },
    mounted() {
        this.getProjects();
    },
})
</script>