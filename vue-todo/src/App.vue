<template>
  <div id="app">
    <Header></Header>

    <Search :searchData="searchText"></Search>

    <TodoList :todoData="text" @allDone="allDone=$event"></TodoList>

    <AddTodo :todoData="text"></AddTodo>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

const stateData = {
  state: {
    message: [
      { text: "some text 1", id: 1, isDone: false, isImportant: false },
      { text: "some text 2", id: 2, isDone: false, isImportant: false },
      { text: "some text 3", id: 3, isDone: false, isImportant: false }
    ],
    search: '',
  }
};

export default {
  data() {
    return {
      text: stateData.state.message,
      searchText: stateData.state.search,
    };
  },
  components: {
    Header,
    Search,
    TodoList,
    AddTodo
  }
};
</script>

<style>
html,
body {
  font-family: sans-serif;
}
#app {
  border: 1px solid #000;
  box-shadow: 0 0 1rem #000;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 2rem;
  width: 40rem;
}
</style>
