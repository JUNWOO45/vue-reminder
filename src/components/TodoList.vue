<template>
  <ul>
    <li v-for="(item, index) in this.$store.state.todoList" v-bind:key="`${item}${index}`" v-on:click="toggleTodo(item, index)" v-bind:class="{completed: item.done}" class="list">
      {{ item.name }}
      <span class="remove-button" v-on:click.stop="removeTodo(item, index)">삭제</span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    removeTodo(item, index) {
      this.$store.commit('removeTodo', {item, index})
    },
    toggleTodo(item, index) {
      this.$store.commit('toggleTodo', {item, index})
    }
  },
  
}
</script>

<style scoped>
  .list {
    cursor: pointer;
    list-style: none;
  }
  .completed {
    color: red;
  }
</style>