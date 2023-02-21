<template>
    <div class="mx-6 px-6 text-6xl h-60 flex justify-center items-center">
        {{title}}
    </div>

    <div class="mx-6 px-6 text-2xl flex flex-col items-center space-y-10" :style="styleObject">
        <div class="mx-80">
            <span>{{desc}}</span>
        </div>
        <div class="flex flex-row items-center justify-end space-x-40">
            <div>📍 Live in Santiago de Chile</div>
            <div>💻 Work in Santiago de Chile</div>
            <div>🕹️ Esports Fan</div>
        </div>
    </div>
    <div class="mx-6 px-6 flex text-2xl flex-col items-center space-y-10 mt-24" :style="styleObject">
        <div class="mx-80 text-4xl">
            <span>I worked in the development of projects for:</span>
        </div>
        <div class="flex flex-row items-center justify-end space-x-10">
            <div v-for="(company,index) in companies" class="grayscale hover:grayscale-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer" :class="index % 2 == 1 ? 'mt-12': ''" @click="goToCompanyLanding(company.landing)">
                <div class="flex items-center justify-center"> 
                      <img class="w-20 h-20 rounded-3xl grayscale-100" v-bind:src="'_nuxt/assets/img/companies/' + company.imagePath" /> 
                </div>
                <div class="text-xl text-center mt-2">{{ company.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'about-me',
        data() {
            return {
                title: 'I’m Jeferson Agudelo, and I’m a Software Engineer.',
                desc: 'I am a Software developer with more than 5 years of experience, passionate about technology and programming, I like to learn, update myself daily with new methodologies to innovate and solve problems, I am not a genius but someone committed who constantly improves, with high analytical skills and understanding.',
                companies: [{
                    id: 'fal',
                    name: "Falabella Corp",
                    imagePath: "fala.png",
                    landing: "https://investors.falabella.com/Spanish/inicio/default.aspx",
                }, {
                    id: 'sod',
                    name: "Sodimac",
                    imagePath: "sodimac.png",
                    landing: "https://sodimac.falabella.com/sodimac-cl/page/nuestra-empresa",
                }, {
                    id: 'vol',
                    name: "Volta",
                    imagePath: "volta.png",
                    landing: "https://www.voltachile.cl/",
                }, {
                    id: 'ser',
                    name: "Sermecoop",
                    imagePath: "sermecoop.png",
                    landing: "https://www.sermecoop.cl/",
                }, {
                    id: 'vtr',
                    name: "VTR",
                    imagePath: "vtr.png",
                    landing: "https://vtr.com/",
                }, {
                    id: 'cla',
                    name: "Claro",
                    imagePath: "claro.png",
                    landing: "https://www.clarochile.cl/personas/",
                }, {
                    id: 'vit',
                    name: "Vitamina",
                    imagePath: "vitamina.png",
                    landing: "https://www.vitamina.cl/",
                }, {
                    id: 'chi',
                    name: "Chilquinta",
                    imagePath: "chilquinta.png",
                    landing: "https://www.chilquinta.cl/",
                }]
            }
        },
        methods: {
            goToCompanyLanding(landingUrl) {
                window.open(landingUrl)
            }
        },
    })
</script>