<template>
  <v-row class="mx-4 mt-7">
    <v-col cols="12" class="display-1"> Server OS </v-col>
    <v-col 
      lg="2"
      md="2"
      sm="3"
      xs="6"
      v-for="(serverOS, index) in serverOSs"
      :key="index"
    >
    <app-OS-card :OS="serverOS" style="width:100%"></app-OS-card>
    </v-col>
  </v-row>
</template>
<script>
import ServerOSCard from './cards/ServerOSCard';
import {serverOSs} from '../../assets/ServerDependencies'
export default {
  data() {
    return {
      serverOSs,
    };
  },
  components:{
      'app-OS-card':ServerOSCard
  }
};
</script>
