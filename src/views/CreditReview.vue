<template>
  <div class="apply">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-two-fifths">
            <ul class="steps has-content-centered">
              <li class="steps-segment">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Your Profile</p>
                </div>
              </li>
              <li class="steps-segment">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Complete your application</p>
                </div>
              </li>
              <li class="steps-segment is-active">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Review</p>
                </div>
              </li>
            </ul>

            <div class="box-custom py-5 px-6 mx-3">
              <p class="has-text-weight-medium mb-5">
                Please review your application to make sure every information
                included is correct.
              </p>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Name</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>Faiz Ainur Rofiq</p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>NIK</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>Faiz Ainur Rofiq</p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Birthplace</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>Depok</p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Birthday</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>7 Mei 1999</p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Address</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>
                    Puri Depok Mas Blok J No.12, Kelurahan Pancoran Mas,
                    Kecamatan Pancoran Mas, Kota Depok, Jawa Barat. Indonesia.
                    16436
                  </p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Credit Type</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>KUR</p>
                </div>
              </div>
              <div class="columns mb-0">
                <div class="column is-one-quarter">
                  <p>Amount</p>
                </div>
                <div class="column is-1">
                  <p>:</p>
                </div>
                <div class="column">
                  <p>Rp. <span>50000</span></p>
                </div>
              </div>
              <div class="columns mt-5 pt-5">
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
                  <button class="button is-link">
                    <p class="">Submit</p>
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
      this.$router.push("/credit/application");
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
</style>
