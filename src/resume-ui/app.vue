<template>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
</template>

<script>

import Header from '~/components/molecules/layout/header.vue'

export default defineComponent({
  name: 'app',
  components: {
    Header
  }
  
})

</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>