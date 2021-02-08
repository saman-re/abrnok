<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import Toolbar from "./components/Toolbar";
export default {
  data() {
    return {};
  },
  components: {
    "app-toolbar": Toolbar,
  },
};
</script>