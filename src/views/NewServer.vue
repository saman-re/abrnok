<template>
  <div>
    <app-nav-drawer></app-nav-drawer>
    <app-choose-server></app-choose-server>
    <v-row></v-row>
  </div>
</template>
<script>
import NavigationDrawer from "../components/NavigationDrawer";
import ChooseServer from '../components/New Server/ChooseServer'
export default {
  data() {
    return {
    };
  },
  components: {
    "app-nav-drawer": NavigationDrawer,
    "app-choose-server":ChooseServer,
  },
};
</script>
