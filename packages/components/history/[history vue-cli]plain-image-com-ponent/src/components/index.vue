<template lang="">
  <a :href="link" target="__blank">
    <img :src="src" class="my-low-code-plain-components-image" />
  </a>
</template>
<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue'
  const props = withDefaults(defineProps<{
    src: string,
    link: string,
  }>(), {
    link: '',
    src: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
  })
</script>
<style lang="stylus">
  .my-low-code-plain-components-image {
    max-width: 100%;
  }
</style>