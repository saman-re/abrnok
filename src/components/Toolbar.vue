<template>
  <v-app-bar
    class="pa-1 grey lighten-1"
    height="65px"
    app
    fixed
    elevate-on-scroll
    clipped-left
  >
    <v-btn plain icon class="hidden-lg-and-up" @click="$store.commit('navSwitch',true)">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-app-bar-title class="text-no-wrap px-0">
      <v-btn plain class="grey lighten-1 rounded-pill">
        <v-icon class="yellow--text text--lighten-3" large href="">mdi-cloud</v-icon>
        <span class="text-subtitle1 font-weight-black red--text text--lighten-1"
          >N</span
        >
        <span
          class="text-subtitle1 font-weight-black green--text text--lighten-1"
          >O</span
        >
        <span
          class="text-subtitle1 font-weight-black blue--text text--lighten-1"
          >K</span
        >
      </v-btn>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="mr-1" v-show="accountBtn">
      <v-badge color="deep-orange accent-4" bottom dot overlap v-if="true">
        <v-icon class="blue--text text--darken-4">mdi-account-circle</v-icon>
      </v-badge>
      <v-icon class="blue--text text--darken-4" v-else
        >mdi-account-circle</v-icon
      >
    </v-btn>
    <v-btn outlined class="grey lighten-3" :to="btnAdd">
      <span class="blue--text text--darken-4">{{ btnTxt }}</span>
      <v-icon right class="blue--text text--darken-4">{{ btnIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      btnTxt: "",
      btnIcon: "",
      btnAdd: "",
      accountBtn: true,
    };
  },
  watch: {
    $route(to) {
        const path = to.path;
       if (path == "/new_server") {
          this.btnTxt = "sign out";
          this.btnIcon = "mdi-logout";
          this.btnAdd = "/";
          this.accountBtn = true;
        } else if (path == "/sign_up") {
          this.btnTxt = "sign in";
          this.btnIcon = "mdi-login";
          this.btnAdd = "/";
          this.accountBtn = false;
        } else {
          this.btnTxt = "sign up";
          this.btnIcon = "mdi-login";
          this.btnAdd = "/sign_up";
          this.accountBtn = false;
        }
    },
  },
  created(){
      const path =this.$route.path;
       if (path == "/new_server") {
          this.btnTxt = "sign out";
          this.btnIcon = "mdi-logout";
          this.btnAdd = "/";
          this.accountBtn = true;
        } else if (path == "/sign_up") {
          this.btnTxt = "sign in";
          this.btnIcon = "mdi-login";
          this.btnAdd = "/";
          this.accountBtn = false;
        } else {
          this.btnTxt = "sign up";
          this.btnIcon = "mdi-login";
          this.btnAdd = "/sign_up";
          this.accountBtn = false;
        }
    },
};
</script>