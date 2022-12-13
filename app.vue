<template>
  <div>
    Testing
<!--    <navbar></navbar>-->
<!--    <nuxt-page></nuxt-page>-->
<!--    <site-footer></site-footer>-->
  </div>
</template>

<script setup lang="ts">

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>