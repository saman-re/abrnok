<template>
  <v-row class="mx-4 mt-7">
    <v-col cols="12" class="display-1"> Server Type </v-col>
    <v-col
      cols="12"
      lg="3"
      md="4"
      sm="6"
      v-for="(server, index) in servers"
      :key="index"
    >
    <app-server-card :server="server"></app-server-card>
    </v-col>
  </v-row>
</template>
<script>
import ServerCard from './ServerCard';
export default {
  data() {
    return {
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
  components:{
      'app-server-card':ServerCard
  }
};
</script>
