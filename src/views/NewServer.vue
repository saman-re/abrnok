<template>
  <div>
    <app-nav-drawer :navShow="navDrawer"></app-nav-drawer>
    <app-choose-server></app-choose-server>
    <v-row> </v-row>
  </div>
</template>
<script>
import NavigationDrawer from "../components/NavigationDrawer";
import ChooseServer from '../components/New Server/ChooseServer'
export default {
  data() {
    return {
      navDrawer: true,
    };
  },
  components: {
    "app-nav-drawer": NavigationDrawer,
    "app-choose-server":ChooseServer,
  },
};
</script>
