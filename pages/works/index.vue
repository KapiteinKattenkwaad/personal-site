<template>
  <div>
    <page-hero title="work" description="
       Here are some of the projects I've worked with.
       Click on any of the links.
      ">

    </page-hero>
    <works-section></works-section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Work',
  meta: [
    {
      name: 'description',
      content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
    },
    {
      property: 'og:title',
      content: 'Work'
    },
    {
      property: 'og:description',
      content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
    },
    {
      name: 'twitter:title',
      content: 'Works'
    },
    {
      name: 'twitter:description',
      content: 'A selection of some of my best works including real projects and some random GitHub & Codepen links'
    }
  ]
})
</script>

<style>

</style>