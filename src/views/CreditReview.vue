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
                  <p>{{ name }}</p>
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
                  <p>{{ nik }}</p>
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
                  <p>{{ birthplace }}</p>
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
                  <p>{{ birthday }}</p>
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
                    {{ address }}
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
                  <p>{{ creditType }}</p>
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
                  <p>
                    Rp. <span>{{ creditAmount }}</span>
                  </p>
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
                  <button class="button is-link" @click="submit">
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
import axios from "axios";

export default {
  data() {
    return {
      userUid: "",
      name: "",
      address: "",
      birthplace: "",
      birthday: "",
      nik: "",
      creditType: "",
      creditAmount: 0,
    };
  },
  mounted() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      this.userUid = profile.user_uid;
      this.name = profile.first_name + " " + profile.last_name;
      this.nik = profile.nik;
      this.address = `${profile.address_line_1} ${profile.address_line_2}, ${profile.city}, ${profile.province}, Indonesia. ${profile.postal_code}`;

      var splitted = profile.ttl.split(", ");
      this.birthplace = splitted[0];
      this.birthday = splitted[1];

      this.creditType = localStorage.getItem("creditType");
      this.creditAmount = localStorage.getItem("creditAmount");
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    backOnClick() {
      this.$router.push("/credit/application");
    },
    submit() {
      const params = new URLSearchParams();
      params.append("user_uid", this.userUid);
      params.append("nik", this.nik);
      params.append("credit_type", this.creditType);
      params.append("bank_name", "BCA");
      params.append("amount", this.creditAmount);
      console.log("submitting");
      axios
        .post("https://api.catena.id/v1/fabric/credit/create", params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          console.log(response.data);
          localStorage.clear();
          this.$router.push("/credit/success");
        })
        .catch((error) => {
          console.log(error);
          localStorage.clear();
          this.$router.push("/credit/failed");
        });
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
