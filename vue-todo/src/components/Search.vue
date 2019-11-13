<template>
  <div class="search">
    <input 
    type="text" 
    placeholder="Search your Todo"
    v-model="message"
    >

    <div class="search__buttons">
      <button>all</button>
      <button @click="allDone">done</button>
      <button>important</button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  props: ["searchData"],
  data () {
    return {
      message: ''
    }
  },
  methods: {
    allDone() {
      console.log(this.searchData)
      this.searchData.message
      // console.log(this.searchData)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    width: 100%;
  }

  .search input {
    border: 1px solid #000;
    border-radius: .5rem 0 0 .5rem;
    flex-grow: 1;
    padding: 0 1rem;
    height: calc(100% - 2px);
  }

  .search input:focus {
    outline: none;
  }

  .search__buttons {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .search__buttons button {
    background-color: #333;
    border: none;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0 1rem;
    height: 100%;
  }

  .search__buttons button:last-child {
    border-radius: 0 .5rem .5rem 0;
  }

  .search__buttons button:hover {
    background-color: #777;
  }
</style>
