<template>
  <div>
    <SecondMenu />
    <FirstMenu />
    <SecondMenu />
    <ThirdMenu />
  </div>
</template>

<script>
import FirstMenu from "../components/FirstMenu";
import SecondMenu from "../components/SecondMenu";
import ThirdMenu from "../components/ThirdMenu";
export default {
  name: "Home",
  components: {
    FirstMenu,
    SecondMenu,
    ThirdMenu,
  },
};
</script>

<style scoped></style>
