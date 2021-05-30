<template>
  <div class="home">
    <div class="columns">
      <div class="column"></div>
      <div class="column has-text-centered">
        <div class="box-custom my-6 p-4">
          <h1 class="is-size-4 has-text-weight-semibold">
            Online Credit Application System
          </h1>
          <h3 class="is-size-6 has-text-weight-medium mb-4">
            Managed by Bank A
          </h3>
          <a href="http://localhost:4000/auth"
            ><button class="button is-link mb-4">Apply using Catena</button></a
          >
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.box-custom {
  border: 0.12rem;
  border-style: solid;
  border-radius: 5px;
  border-color: whitesmoke;
}
</style>
