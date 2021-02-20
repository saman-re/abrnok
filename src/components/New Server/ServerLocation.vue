<template>
  <v-row class="mx-4 mt-7">
    <v-col cols="12" class="display-1"> Server Location </v-col>
    <v-tabs
      v-model="tabs"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tab>
        All locations
      </v-tab>
      <v-tab>
        North America
      </v-tab>
      <v-tab>
        Europe
      </v-tab>
      <v-tab>
        Asia
      </v-tab>
      <v-tab>
        Australia
      </v-tab>
    </v-tabs>
    <v-card width="100%" flat class="mx-4 mt-7">
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-row class="pt-4 pb-8 px-5">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="6"
              v-for="(server, index) in allLocations"
              :key="index"
            >
              <app-location-card :server="server"></app-location-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="pt-4 pb-8 px-5">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="6"
              v-for="(server, index) in servers.northAmerica"
              :key="index"
            >
              <app-location-card :server="server"></app-location-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="pt-4 pb-8 px-5">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="6"
              v-for="(server, index) in servers.europe"
              :key="index"
            >
              <app-location-card :server="server"></app-location-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="pt-4 pb-8 px-5">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="6"
              v-for="(server, index) in servers.asia"
              :key="index"
            >
              <app-location-card :server="server"></app-location-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="pt-4 pb-8 px-5">
            <v-col
              lg="3"
              md="4"
              sm="6"
              v-for="(server, index) in servers.australia"
              :key="index"
            >
              <app-location-card :server="server"></app-location-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-row>
</template>
<script>
import { serverLocations } from "../../assets/ServerDependencies";
import LocationCard from "./cards/LocationCard";
export default {
  data() {
    return {
      tabs: null,
      servers: serverLocations,
      allLocations: [],
    };
  },
  created() {
    for (let loc in serverLocations) {
      serverLocations[loc].forEach((value) => {
        this.allLocations.push(value);
      });
    }
  },
  components: {
    "app-location-card": LocationCard,
  },
};
</script>
