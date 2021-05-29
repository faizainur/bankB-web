<template>
  <h1>Loading your account</h1>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
    localStorage.setItem("accessToken", this.$route.query.accessToken);
    localStorage.setItem("refreshToken", this.$route.query.refreshToken);
    localStorage.setItem("email", this.$route.query.email);
    // this.$router.push("/about");
  },
};
</script>
