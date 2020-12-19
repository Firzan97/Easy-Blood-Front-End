<template>
  <v-parallax
    dark
    height="600"
    src="https://img.graphicsurf.com/2020/08/blood-donation-vector-illustration.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4 ">
          Easy Blood
        </h1>
        <h4 class="subheading">
          Be a blood donor today!
        </h4>
        <v-btn class="menu-button" depressed color="error">
          Lets donate blood
        </v-btn>
        <v-btn class="menu-button" depressed color="error">
          Request Blood
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Button from "./Button";
export default {
  name: "FirstMenu",
  component: {
    Button,
  },
};
</script>

<style scoped>
.menu-button {
  margin: 5px;
}
</style>
