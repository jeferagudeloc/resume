<template>
    <section class="flex justify-center items-center h-screen flex-col space-y-0">
        <div class="mx-6 px-6 text-6xl h-28">
            {{'Hi!'}}
        </div>
        <div class="mx-6 px-6 text-6xl h-60">
            {{title}}
        </div>
    </section>
    <section data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="300" data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-bottom" class="flex h-screen-half">
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
    </section>
    <section data-aos="zoom-out-up" data-aos-offset="500" data-aos-duration="300" data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-bottom" class="flex h-screen-half flex-col space-y-40">
        <div class="mx-6 px-6 flex text-2xl flex-col items-center space-y-10" :style="styleObject">
            <div class="mx-80 text-4xl">
                <span>I worked in the development of projects for:</span>
            </div>
            <div class="flex flex-row items-center justify-end space-x-10">
                <div v-for="(company,index) in companies"
                    class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                    :class="index % 2 == 1 ? 'mt-12': ''" @click="goToCompanyLanding(company.landing)">
                    <div class="flex items-center justify-center">
                        <img class="w-20 h-20 rounded-3xl grayscale-100"
                            v-bind:src="'_nuxt/assets/img/companies/' + company.imagePath" />
                    </div>
                    <div class="text-xl text-center mt-2">{{ company.name }}</div>
                </div>
            </div>
        </div>
        <div class="mx-6 px-6 flex text-2xl flex-col items-center space-y-10 mb-80" :style="styleObject">
            <div class="mx-80 text-4xl">
                <span>With:</span>
            </div>
            <div class="flex flex-row items-center justify-end space-x-10">
                <div v-for="(language,index) in languages"
                    class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                    :class="index % 2 != 1 ? 'mt-12': ''" @click="goTolanguageLanding(language.landing)">
                    <div class="flex justify-center">
                        <i :class="`devicon-${language.id}-plain colored text-7xl`"></i>
                    </div>
                    <div class="text-xl text-center mt-2">{{ language.name }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles

    export default defineComponent({
        name: 'about-me',
        data() {
            return {
                title: 'I’m Jeferson Agudelo, and I’m a Software Engineer.',
                desc: 'I am a Software developer with more than 5 years of experience, passionate about technology and programming, I like to learn, update myself daily with new methodologies to innovate and solve problems, I am not a genius but someone committed who constantly improves, with high analytical skills and understanding.',
                companies: [{
                    id: 'falabella',
                    name: "Falabella Corp",
                    imagePath: "falabella.png",
                    landing: "https://investors.falabella.com/Spanish/inicio/default.aspx",
                }, {
                    id: 'sodimac',
                    name: "Sodimac",
                    imagePath: "sodimac.png",
                    landing: "https://sodimac.falabella.com/sodimac-cl/page/nuestra-empresa",
                }, {
                    id: 'volta',
                    name: "Volta",
                    imagePath: "volta.png",
                    landing: "https://www.voltachile.cl/",
                }, {
                    id: 'sermecoop',
                    name: "Sermecoop",
                    imagePath: "sermecoop.png",
                    landing: "https://www.sermecoop.cl/",
                }, {
                    id: 'vtr',
                    name: "VTR",
                    imagePath: "vtr.png",
                    landing: "https://vtr.com/",
                }, {
                    id: 'jidoit',
                    name: "Jidoit",
                    imagePath: "jidoit.png",
                    landing: "https://www.jidoit.com/",
                }, {
                    id: 'claro',
                    name: "Claro",
                    imagePath: "claro.png",
                    landing: "https://www.clarochile.cl/personas/",
                }, {
                    id: 'vitamina',
                    name: "Vitamina",
                    imagePath: "vitamina.png",
                    landing: "https://www.vitamina.cl/",
                }, {
                    id: 'chilquinta',
                    name: "Chilquinta",
                    imagePath: "chilquinta.png",
                    landing: "https://www.chilquinta.cl/",
                }],
                sectionStyle: {
                    height: "100vh",
                },
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
                    id: 'amazonwebservices',
                    name: "Amazon Web Services",
                }, {
                    id: 'terraform',
                    name: "Terraform",
                }]
            }
        },
        methods: {
            goToCompanyLanding(landingUrl) {
                window.open(landingUrl)
            }
        },
        mounted() {
            AOS.init({})
        },
    })
</script>