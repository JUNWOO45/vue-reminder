<template>
  <!-- <h1>TODO header</h1> -->
  <h1 v-on:click="changeText">{{ this.$store.state.headerText }}</h1>
</template>

<script>
  export default {
    methods: {
      changeText() {
        console.log('clicked');
        this.$store.commit('changeHeaderText');
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #333;
    font-weight: bold;
    margin: 2.5rem auto;
  }
</style>