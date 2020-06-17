<template>
  <ul>
    <li v-for="item in todoList" v-bind:key="item">{{ item }} </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      todoList: []
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoList.push(localStorage.key(i));
        }
      }
    }
  }
}
</script>

<style>

</style>