<template>
  <PlainImageComponent 
  :src="`https://picsum.photos/${Math.floor(Math.random() * 1000)}`" 
  link="https://reactnative.cn/docs/environment-setup" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlainImageComponent from '../components/index.vue';

@Options({
  components: {
    PlainImageComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
