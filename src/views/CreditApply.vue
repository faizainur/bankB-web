<template>
  <div class="apply">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-two-fifths">
            <ul class="steps has-content-centered">
              <li class="steps-segment ">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Your Profile</p>
                </div>
              </li>
              <li class="steps-segment is-active">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Complete your application</p>
                </div>
              </li>
              <li class="steps-segment ">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Review</p>
                </div>
              </li>
            </ul>

            <div class="box-custom py-5 px-6 mx-3">
              <label for="" class="">Credit Type</label>
              <!-- <input type="text" name="name" id="" class="input mt-2 mb-4" /> -->
              <div class="select dblock is-fullwidth">
                <select name="" id="">
                  <option value="">KUR Mikro</option>
                  <option value="">KUR Makro</option>
                </select>
              </div>
              <label for="">Amount</label>
              <input type="number" name="name" id="" class="input mb-4 mt-2" />

              <div class="columns mt-5">
                <div class="column is-3 has-text-right">
                  <button
                    class="button px-5  is-fullwidth"
                    @click="backOnClick"
                  >
                    Back
                  </button>
                </div>
                <div class="column"></div>
                <div class="column is-3 has-text-right">
                  <button
                    class="button px-5 is-link is-fullwidth"
                    @click="nextOnClick"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var obj = {
      key1: "Hello",
      key2: "World",
    };
    localStorage.setItem("obj", JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem("obj")));
  },
  methods: {
    backOnClick() {
      this.$router.push("/credit/profile");
    },
    nextOnClick() {
      this.$router.push("/credit/review");
    },
  },
};
</script>
<style>
html,
body {
  height: 100vh;
}
</style>

<style scoped>
.apply {
  /* display: grid;
  place-items: center; */
  height: 100vh;
}

.box-custom {
  border: 0.12rem;
  border-style: solid;
  border-radius: 5px;
  border-color: whitesmoke;
}

.dblock {
  display: block;
}
</style>
