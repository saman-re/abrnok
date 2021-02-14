<template>
  <div>
    <app-dialog></app-dialog>
    <app-nav-drawer></app-nav-drawer>
    <app-server-type id="Type" class="pt-15"></app-server-type>
    <app-server-location id="Location" class="pt-15"></app-server-location>
    <app-server-OS id="OS" class="pt-15"></app-server-OS>
    <app-server-config id="Size" class="pt-15"></app-server-config>
    <v-row></v-row>
  </div>
</template>
<script>
import NavigationDrawer from "../components/NavigationDrawer";
import ServerType from '../components/New Server/ServerType';
import ServerLocation from '../components/New Server/ServerLocation';
import ServerOS from '../components/New Server/ServerOS';
import ServerConfig from '../components/New Server/ServerConfig';
import ProfileDialog from '../components/ProfileDialog';
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
    "app-server-config":ServerConfig,
    "app-dialog":ProfileDialog,
  },
};
</script>
