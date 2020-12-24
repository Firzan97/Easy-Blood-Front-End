<template>
  <div class="request-table">
    <v-row class="justify-center">
      <h3>Request List</h3>
    </v-row>
    <v-container class="grey lighten-5">
      <v-row
        v-for="n in Math.ceil(this.count / 4)"
        :key="n"
        :class="n === 1 ? 'mb-16' : ''"
        no-gutters
      >
        <v-col v-for="k in eventRow[n - 1]" :key="k">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="k.imageURL" height="200px"></v-img>

            <v-card-title>Blood Type {{ k.bloodType }} </v-card-title>

            <v-card-subtitle> {{ k.reason }} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "RequestTable",
  data() {
    return {
      count: 0,
      show: false,
      currentRow: 0,
      currentColumn: 0,
      event: [],
      eventRow: [],
      anotherRow: false,
    };
  },
  created() {
    this.getEvent();
  },
  methods: {
    getEvent() {
      axios
        .get("http://peaceful-springs-09367.herokuapp.com/api/request")
        .then((response) => {
          // handle success
          console.log(response);
          this.count = response.data.length;
          this.currentRow = Math.ceil(this.count / 4);
          for (var x = 1; x <= this.count; x++) {
            this.event.push(response.data[x - 1]);
            if (x % 4 == 0) {
              this.eventRow.push(this.event);
              if (x % 4 == 0) {
                this.anotherRow = true;
                this.event = [];
              }
            }
            if (this.anotherRow == true) {
              if (x == this.count) {
                this.eventRow.push(this.event);
              }
              if (this.anotherRow == false) {
                this.event = [];
              }
            }
          }
          if (this.count < 4) {
            this.eventRow.push(this.event);
          }
          this.currentColumn = this.count;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.request-table {
  margin: 1.5rem;
}
</style>
