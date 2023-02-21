<template>
    <Article v-for="article in articleList" :title="article.title" :description="article.description" />
</template>


<script>

import Article from '~/components/atoms/article.vue'

export default defineComponent({
    name: 'articles',
    components: {
        Article
    },
    data() {
        return {
            articleList: [{
                title: '¿Cómo enviar un mail con Spring Boot?',
                description: 'Corta implementación de un proyecto para enviar mails. Los sistemas de correo electrónico se basan en un modelo de almacenamiento y reenvío, de modo que no es necesario que ambos extremos se encuentren conectados simultáneamente. Para ello se emplea un servidor de correo que hace las funciones de intermediario, guardando temporalmente los mensajes antes de enviarse a sus destinatarios.'
            }, {
                title: 'SpringBoot — Criteria— JPA.',
                description: 'En sistemas donde trabajamos con información gestionada con JPA (Java Persistance API), no es difícil tomar la decisión incorrecta a la hora de hacer una consulta compleja en la base de datos, ya que es realmente sencillo hacer consultas simples con JpaRepository por ejemplo. Pero qué pasa cuando necesitamos hacer una consulta más compleja o condicionada? Lo primero que se nos viene a la mente(al menos a mi) es crear un StringBuilder e ir concatenando una query nativa dependiendo de mi “objeto filtro”el cual medirá los parámetros para poder filtrar mi información, solución que es realmente muy mala, porque los errores solo los pueden detectar en tiempo de ejecución y es pésimo para la mantención de un sistema. Otra solución relativamente no tan sencilla es crear un procedimiento almacenado donde no tenemos la seguridad de que funcione correctamente si cambiamos la base de datos. Ambas soluciones son sensibles al SQL INJECTION.'
            }]
        }
    },
    methods: {
        async getArticles() {
            await this.$api.get("http://localhost:8080/articles").then((response) => {
                this.articleList = response.data;
            });
        }
    },
    mounted() {
        this.getArticles();
    },
})

</script>