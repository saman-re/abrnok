<template>
  <v-row class="mx-4 mt-7">
    <v-col cols="12" class="display-1"> Server Config </v-col>
    <v-col
      cols="12"
      lg="3"
      md="4"
      sm="6"
      v-for="(config, index) in configs"
      :key="index"
    >
    <app-config-card :config="config"></app-config-card>
    </v-col>
  </v-row>
</template>
<script>
import ServerConfigCard from './cards/ServerConfigCard';
import {serversConfig} from '../../assets/ServerDependencies'
export default {
  data() {
    return {
      configs:serversConfig,
    };
  },
  components:{
      'app-config-card':ServerConfigCard
  }
};
</script>
