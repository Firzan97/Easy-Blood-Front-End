<template>
  <div>
    <v-app-bar color="red accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link tag="span" to="/">
          <span class="mr-2">Home</span>
        </router-link></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <router-link tag="span" to="/Request">
        <span class="mr-2">Request</span>
      </router-link>

      <router-link tag="span" to="/Event">
        <span class="mr-2">Event</span>
      </router-link>

      <router-link tag="span" to="/Profile">
        <span class="mr-2">Profile</span>
      </router-link>

      <router-link tag="span" to="/Admin">
        <span class="mr-2">Admin</span>
      </router-link>
      <router-link tag="span" to="/Login">
        <span class="mr-2">Login</span>
      </router-link>
      <router-link tag="span" to="/Register">
        <span class="mr-2">Register</span>
      </router-link>
      <div class="mx-3"></div>

      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>

      <div class="mx-3"></div>
      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
