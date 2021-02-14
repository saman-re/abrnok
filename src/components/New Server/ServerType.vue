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
    <app-server-card :server="server" style="width:100%"></app-server-card>
    </v-col>
  </v-row>
</template>
<script>
import ServerCard from './cards/ServerCard';
import {serversType} from '../../assets/ServerDependencies'
export default {
  data() {
    return {
      servers:serversType,
    };
  },
  components:{
      'app-server-card':ServerCard
  }
};
</script>
