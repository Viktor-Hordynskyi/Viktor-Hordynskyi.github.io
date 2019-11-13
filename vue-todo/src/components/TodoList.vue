<template>
  <div class="todo-list">
    <ul>
      <li
        v-for="({text, id, isDone, isImportant}) in todoData"
        :key="id"
        :class="{important: isImportant, done: isDone}"
      >
        <span @click="important(id)">{{text}}</span>

        <div class="todo-list__control">
          <button @click="done(id)">&#x2713;</button>
          <button @click="dlt(id)">&#x2716;</button>
        </div>
      </li>
    </ul>
    {{searchData}}
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ["todoData", "searchData"],
  data() {
    return {
      isDone: false,
      isImportant: false,
    };
  },
  methods: {
    done(id) {
      this.todoData.map(e => {
        if (e.id === id) {
          e.isDone = !e.isDone;
        }
      });
    },
    important(id) {
      this.todoData.map(e => {
        if (e.id === id) {
          e.isImportant = !e.isImportant;
        }
      });
    },
    dlt(id) {
      const idx = this.todoData.findIndex(el => el.id === id);
      Vue.delete(this.todoData, idx);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  width: 100%;
}

.todo-list ul {
  list-style: none;
  padding: 0;
}

.todo-list ul li {
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.todo-list ul li span {
  flex-grow: 1;
  padding: 0.5rem 1rem;
}

.todo-list ul li:nth-child(odd) {
  background-color: #999;
}

.todo-list ul li:nth-child(even) {
  background-color: #888;
}

.todo-list ul li:hover {
  background-color: #777;
}

.todo-list ul li.important {
  background-color: rgba(0, 119, 255, 0.5);
  color: #000;
  font-weight: 700;
}

.todo-list ul li.done {
  background-color: #555555;
  color: #000;
  font-weight: 400;
  text-decoration: line-through;
}

.todo-list__control {
  padding: 0.5rem 1rem;
}

.todo-list__control button {
  border: none;
  border-radius: 0.2rem;
  color: #ffffff;
  cursor: pointer;
}

.todo-list__control button:hover {
  box-shadow: 0 0 0.2rem #000;
}

.todo-list__control button:first-child {
  background-color: green;
  margin-right: 0.5rem;
}

.todo-list__control button:last-child {
  background-color: orangered;
}
</style>
