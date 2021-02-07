<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-container>
    <router-view></router-view>
    </v-container>
  </v-app>
</template>
<script>
import Toolbar from './components/Toolbar'
export default {
  data(){
    return{
    }
  },
  components:{
    'app-toolbar':Toolbar
  }
}
</script>