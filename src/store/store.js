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
    todoItems: storage.fetch()
  },
  mutations: {
    changeHeaderText(state) {
      return state.headerText = state.headerText + '!!';
    },
    addTodo(state, todoItem) {
      const stringifyData = JSON.stringify( { name: todoItem, done: false });
      localStorage.setItem(todoItem, stringifyData);
      state.todoItems.push({ name: todoItem, done: false });
    },
  }
});
