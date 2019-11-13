<template>
  <header class="header">
    <h1>My first Todo list on VUE</h1>

    <div class="header__quantity">
      <p>
        <span>done:</span> 5
        <br />
        <span>all:</span> 10
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.header h1 {
  margin: 0;
}

.header__quantity p {
  margin: 0;
  text-transform: uppercase;
}

.header__quantity p span {
  font-weight: bold;
}
</style>
