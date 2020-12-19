<template>
  <div>
    <SecondMenu />

    <FirstMenu />
    <SecondMenu />
  </div>
</template>

<script>
import FirstMenu from "../components/FirstMenu";
import SecondMenu from "../components/SecondMenu";

export default {
  name: "Home",
  components: {
    FirstMenu,
    SecondMenu,
  },
};
</script>

<style scoped></style>
