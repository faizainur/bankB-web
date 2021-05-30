<template>
  <h1>Loading your account</h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
    var accessToken = this.$route.query.accessToken;
    var refreshToken = this.$route.query.refreshToken;
    var email = this.$route.query.email;

    var authToken = "Bearer " + accessToken;

    axios
      .get("https://api.catena.id/v1/fabric/users/search", {
        params: {
          email: email,
        },
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        localStorage.setItem("profile", JSON.stringify(response.data[0]));
        console.log(JSON.parse(localStorage.getItem("profile")));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("email", email);
        this.$router.push("/credit/profile");
      })
      .catch((error) => console.log(error));
  },
};
</script>
