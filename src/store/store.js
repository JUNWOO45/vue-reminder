import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({

  state: {
    headerText: 'TODO header',
    todoList: storage.fetch()
  },
  mutations: {
    changeHeaderText(state) {
      return state.headerText = state.headerText + '!!';
    },
    addTodo(state, todoItem) {
      const stringifyData = JSON.stringify( { name: todoItem, done: false });
      localStorage.setItem(todoItem, stringifyData);
      state.todoList.push({ name: todoItem, done: false });
    },
    removeTodo(state, {item, index}) {
      localStorage.removeItem(item.name);
      state.todoList.splice(index, 1);
    },
    toggleTodo(state, {item, index}) {
      const parsedItem = JSON.parse(localStorage.getItem(item.name));
      const stringifyTodo = JSON.stringify({ name: item.name, done: !parsedItem.done });
      localStorage.setItem(item.name, stringifyTodo);
      state.todoList[index].done = !state.todoList[index].done;
    },
  }
});
