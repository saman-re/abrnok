<template>
  <div>
    <app-nav-drawer></app-nav-drawer>
    <app-server-type id="Type"></app-server-type>
    <app-server-location id="Location"></app-server-location>
    <app-server-OS id="OS"></app-server-OS>
    <app-server-size id="Size"></app-server-size>
    <v-row></v-row>
  </div>
</template>
<script>
import NavigationDrawer from "../components/NavigationDrawer";
import ServerType from '../components/New Server/ServerType';
import ServerLocation from '../components/New Server/ServerLocation';
import ServerOS from '../components/New Server/ServerSize';
import ServerSize from '../components/New Server/ServerSize'
export default {
  data() {
    return {
    };
  },
  components: {
    "app-nav-drawer": NavigationDrawer,
    "app-server-type":ServerType,
    "app-server-location":ServerLocation,
    "app-server-OS":ServerOS,
    "app-server-size":ServerSize
  },
};
</script>
