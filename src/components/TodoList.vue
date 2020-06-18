<template>
  <ul>
    <li v-for="(item, index) in todoList" v-bind:key="item" v-on:click="toggleTodo(item, index)" v-bind:class="{completed: item.done}" class="list">
      {{ item.name }}
      <span class="remove-button" v-on:click.stop="removeTodo(item, index)">삭제</span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      todoList: []
    }
  },
  methods: {
    removeTodo: function(item, index) {
      if(localStorage.length > 0) {
        localStorage.removeItem(item);
        this.todoList.splice(index, 1);
      }
    },
    toggleTodo: function(item) {
      const currentDoneStatus = JSON.parse(localStorage.getItem(item.name));
      const stringifyTodo = JSON.stringify({ name: item.name, done: !currentDoneStatus.done });
      localStorage.setItem(item.name, stringifyTodo);
      item.done = !item.done;
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
}
</script>

<style>
  .list {
    cursor: pointer;
    list-style: none;
  }
  .completed {
    color: red;
  }
</style>