<template>
  <div class="apply">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-two-fifths">
            <ul class="steps has-content-centered">
              <li class="steps-segment is-active">
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
              <li class="steps-segment ">
                <span class="steps-marker"></span>
                <div class="steps-content pt-3">
                  <p class="is-size-6">Review</p>
                </div>
              </li>
            </ul>

            <div class="box-custom py-5 px-6 mx-3">
              <label for="" class="">Name</label>
              <input
                type="text"
                name="name"
                id=""
                class="input mt-2 mb-4"
                v-model="name"
                readonly
              />
              <label for="">NIK</label>
              <input
                type="text"
                name="name"
                id=""
                class="input mb-4 mt-2"
                v-model="nik"
                readonly
              />
              <label for="">Birthplace</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="birthplace"
                class="input mb-4 mt-2"
                readonly
              />
              <label for="">Birthday</label>
              <input
                type="text"
                name="name"
                id=""
                v-model="birthday"
                class="input mb-4 mt-2"
                readonly
              />
              <label for="">Address</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                class="textarea mb-3 mt-2"
                v-model="address"
                readonly
              ></textarea>

              <div class="columns mt-5">
                <div class="column is-3 has-text-right">
                  <button
                    class="button px-4 is-fullwidth"
                    @click="cancelOnClick"
                  >
                    Cancel
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
    return {
      name: "",
      address: "",
      birthplace: "",
      birthday: "",
      nik: "",
    };
  },
  mounted() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      this.name = profile.first_name + " " + profile.last_name;
      this.nik = profile.nik;
      this.address = `${profile.address_line_1} ${profile.address_line_2}, ${profile.city}, ${profile.province}, Indonesia. ${profile.postal_code}`;

      var splitted = profile.ttl.split(", ");
      this.birthplace = splitted[0];
      this.birthday = splitted[1];
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    nextOnClick() {
      this.$router.push("/credit/application");
    },
    cancelOnClick() {
      localStorage.clear();
      this.$router.push("/");
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
