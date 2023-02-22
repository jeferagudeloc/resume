<template>
    <div v-if="selectedTechId" class="text-center mt-6">filter by: {{selectedTechId}}</div>
    <div data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="300" data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-bottom" v-if="viewDetailsProject" class="flex justify-center space-x-60 mt-6">
        <div class="columns-1 w-4/5 rounded-xl bg-white shadow-xl dark:bg-neutral-700 h-1/2">
            <div>
                <div class="flex items-center justify-center mt-6">
                    <img class="w-20 h-20 rounded-3xl grayscale-100"
                        v-bind:src="'_nuxt/assets/img/companies/' + viewDetailsProject.companyId +'.png'" />
                </div>
                <div class="p-6">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                        {{viewDetailsProject.title}}
                    </h5>
                    <p class="mb-2 text-base text-neutral-600 dark:text-neutral-200 text-center">
                        {{viewDetailsProject.description}}
                    </p>
                </div>
                <div class="mx-6">
                    <span class="dark:text-neutral-100">
                        {{viewDetailsProject.projectDetail.technicalDescription}}
                    </span>
                </div>
            </div>
            <div>
                <div class="flex justify-center space-x-6 mb-6 mt-6">
                    <div v-for="techId in viewDetailsProject.projectDetail.techIdList">
                        <i v-if="!techId.includes('-original')" :class="`devicon-${techId}-plain colored text-4xl`"></i>
                        <i v-if="techId.includes('-original')" :class="`devicon-${techId} colored text-4xl`"></i>
                        <img v-if="techId.includes('-img')" class="w-10 h-10 rounded-2xl grayscale-100"
                            v-bind:src="'_nuxt/assets/img/tech/' + techId +'.png'" />
                    </div>
                </div>
                <div class="flex justify-center items-center border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50 mt-auto text-center cursor-pointer"
                    @click="setStyle(viewDetailsProject)">
                    <span> Hide detail </span>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-center mt-6">
        <div v-for="project in filteredProjects"
            class="max-w-sm rounded-xl bg-white shadow-xl dark:bg-neutral-700 mb-6 mr-6 flex flex-col">
                <img class="rounded-t-xl" v-bind:src="`_nuxt/assets/img/projects/${project.imageId}`" />
            <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {{project.title}}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {{project.description}}
                </p>
            </div>
            <div class="flex flex-wrap justify-center space-x-6 mb-6">
                <div v-for="techId in project.projectDetail.techIdList">
                    <i v-if="!techId.includes('-original')" :class="`devicon-${techId}-plain colored text-4xl`"></i>
                    <i v-if="techId.includes('-original')" :class="`devicon-${techId} colored text-4xl`"></i>
                    <img v-if="techId.includes('-img')" class="w-10 h-10 rounded-2xl grayscale-100"
                        v-bind:src="'_nuxt/assets/img/tech/' + techId +'.png'" />
                </div>
            </div>
            <div class="border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50 mt-auto text-center cursor-pointer"
                @click="setStyle(project)">
                <span> View detail </span>
            </div>
        </div>
    </div>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles

    export default defineComponent({
        name: 'project-list',
        data() {
            return {
                viewDetailsProject: null,
                cardOpenStyle: {
                    width: '100%',
                },
                cardNormalStyle: {
                    width: 'auto'
                }
            }
        },
        props: {
            projectList: {
                type: Array,
                required: true
            },
            selectedTechId: {
                type: String,
                required: false
            }
        },
        methods: {
            setStyle(viewDetailsProject) {
                if (this.viewDetailsProject !== viewDetailsProject) {
                    window.scrollTo(0, 0);
                    this.viewDetailsProject = viewDetailsProject
                } else {
                    this.viewDetailsProject = null
                }
            }
        },
        mounted() {
            AOS.init({})
        },
        computed: {
            filteredProjects() {
                return this.selectedTechId == null ? this.projectList : this.projectList.filter(x => x
                    .projectDetail.techIdList.includes(this.selectedTechId))
            }
        }

    })
</script>