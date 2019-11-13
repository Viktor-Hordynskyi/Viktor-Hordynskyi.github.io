<template>
  <div class="add">
    <input type="text" placeholder="Type name of your Todo" v-model="message" />

    <div class="add__buttons">
      <button @click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todoData"],
  data() {
    return {
      message: ""
    };
  },
  methods: {
    addTodo() {
      if (this.message) {
        this.todoData.push({
          text: this.message,
          id: new Date().toJSON(),
          isDone: false,
          isImportant: false
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  width: 100%;
}

.add input {
  border: 1px solid #000;
  border-radius: 0.5rem 0 0 0.5rem;
  flex-grow: 1;
  padding: 0 1rem;
  height: calc(100% - 2px);
}

.add input:focus {
  outline: none;
}

.add__buttons {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.add__buttons button {
  background-color: #333;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #fff;
  cursor: pointer;
  margin: 0;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
}

.add__buttons button:hover {
  background-color: #777;
}
</style>
