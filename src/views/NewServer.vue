<template>
  <div>
    <app-nav-drawer :navShow="navDrawer"></app-nav-drawer>
    <v-row class="mx-4 mt-7">
      <v-col cols="12" class="display-1"> Choose Server </v-col>
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-for="(server, index) in servers"
        :key="index"
      >
        <v-card>
          <div class="blue" style="height:120px"></div>
          <v-card-title class="text-truncate">
            {{ server.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>
<script>
import NavigationDrawer from "../components/NavigationDrawer";
export default {
  data() {
    return {
      navDrawer: true,
      servers: [
        {
          title: "Cloud Compute",
        },
        {
          title: "High Frequency",
        },
        {
          title: "Bare Metal",
        },
        {
          title: "Dedicated Cloud ",
        },
      ],
    };
  },
  components: {
    "app-nav-drawer": NavigationDrawer,
  },
};
</script>
