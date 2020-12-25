<template>
  <div class="profile">
    <v-card class="mx-auto" max-width="434" tile>
      <v-img height="100%" :src="user.imageURL"> </v-img>
    </v-card>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>
    <form>
      <v-text-field
        v-model="user.username"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.age"
        :error-messages="nameErrors"
        :counter="10"
        label="Age"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.bloodType"
        :error-messages="nameErrors"
        :counter="10"
        label="Blood Type"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.weight"
        :error-messages="nameErrors"
        :counter="10"
        label="Weight"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.height"
        :error-messages="nameErrors"
        :counter="10"
        label="Height"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.phoneNumber"
        :error-messages="nameErrors"
        :counter="10"
        label="Phone Number"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-btn class="mr-4" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      user: [],
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  },
};
</script>

<style scoped>
.profile {
  margin: 2.5rem;
}
</style>
