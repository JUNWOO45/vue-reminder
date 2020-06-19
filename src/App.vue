<template>
  <div id="app">
    <TodoHeader />
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
