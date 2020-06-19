<template>
  <div class="clear-all-container" v-on:click="clearAll">
    <span class="clear-all">전체 삭제</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll: function() {
      this.$emit('clearAllTodoItem');
    }
  }
}
</script>

<style scoped>
  .clear-all-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clear-all {
    padding: 15px 5px;
    width: 150px;
    border: 2px solid black;
  }
</style>
