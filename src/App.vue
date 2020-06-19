<template>
  <div id="app">
    <TodoHeader />
    <!-- <TodoInput v-on:addTodoItem="addTodoItemFromApp"/> -->
    <TodoInput />
    <TodoList />
    <TodoFooter v-on:clearAllTodoItem="clearAllTodoItemFromApp"/>
    <div>{{this.$store.state.testMsg}}</div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoList: []
    }
  },
  methods: {
    // removeTodoItemFromApp: function(item, index) {
    //   localStorage.removeItem(item.name);
    //   this.todoList.splice(index, 1);
    // },
    // toggleTodoItemFromApp: function(item, index) {
    //   const parsedItem = JSON.parse(localStorage.getItem(item.name));
    //   const stringifyTodo = JSON.stringify({ name: item.name, done: !parsedItem.done });
    //   localStorage.setItem(item.name, stringifyTodo);
    //   this.todoList[index].done = !this.todoList[index].done;
    // },
    clearAllTodoItemFromApp: function() {
      localStorage.clear();
      this.todoList = [];
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
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
</style>
