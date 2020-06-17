<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = ''; 
    }
  } 
}
</script>

<style>

</style>