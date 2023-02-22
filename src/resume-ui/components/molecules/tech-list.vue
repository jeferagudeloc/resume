<template>
    <div class="flex flex-row items-center justify-center space-x-10">
        <div v-for="(tech,index) in techList"
            class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
            :class="selectedTechId === tech.id ? 'grayscale-0' : 'grayscale'" @click="choose(tech.id)">
            <div class="flex justify-center">
                <i :class="`devicon-${tech.id}-plain colored text-4xl`"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'tech-list',
        data() {
            return {
                selectedTechId: null
            }
        },
        methods: {
            choose(techId) {

                if(this.selectedTechId !== techId) {
                    this.selectedTechId = techId;
                    this.$emit('choose-tech', techId);
                } else {
                    this.selectedTechId = null;
                    this.$emit('choose-tech', null);
                }

            }
        },
        props: {
            techList: {
                type: Array,
                required: true,
            }
        }
    })
</script>