<template>
  <div>
    <v-app-bar
      class="pa-1 grey lighten-1"
      height="65px"
      fixed
      elevate-on-scroll
      clipped-left
    >
      <v-toolbar-title>
        <v-icon class="yellow--text text--lighten-3">mdi-cloud</v-icon>
        <span class='text-subtitle2 font-weight-black red--text text--lighten-1'>N</span>
        <span class='text-subtitle2 font-weight-black green--text text--lighten-1'>O</span>
        <span class='text-subtitle2 font-weight-black blue--text text--lighten-1'>K</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-1" v-show="accountBtn">
        <v-badge color="deep-orange accent-4" bottom dot overlap v-if="true">
          <v-icon class="blue--text text--darken-4">mdi-account-circle</v-icon>
        </v-badge>
        <v-icon class="blue--text text--darken-4" v-else
          >mdi-account-circle</v-icon
        >
      </v-btn>
      <v-btn plain outlined class="grey lighten-3" to="/">
        <span class="blue--text text--darken-4">{{btnTxt}}</span>
        <v-icon right class="blue--text text--darken-4">{{btnIcon}}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data(){
        const path=this.$route.path
        if(path=="/new_server"){
        return{
            btnTxt:'sign out',
            btnIcon:'mdi-logout',
            accountBtn:true
        };
        }else{
            return{
                btnTxt:'sign in',
                btnIcon:'mdi-login',
                accountBtn:false
            };
        }
    }
}
</script>