<template>
    <v-navigation-drawer app v-model="navDrawer" clipped width="90px" class="blue darken-3 container px-0">
      <v-list>
        <v-list-item class="container px-0" v-for="(listItem,index) in listItems" :key="index">
          <v-card flat width="100%" class="blue darken-3">
            <v-card-text class="text-center pb-0">
            <v-icon x-large class="black--text">
              mdi-{{listItem.icon}}
            </v-icon>
            </v-card-text>
            <v-card-subtitle class="pt-0 text-center">
              {{listItem.subtitle}}
            </v-card-subtitle>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            // navDrawer:this.$store.state.navShow,
        listItems:[
            {
                icon:'circle',
                subtitle:'server'
            },
            {
                icon:'circle',
                subtitle:'location'
            },
            {
                icon:'circle',
                subtitle:'type'
            },
            {
                icon:'circle',
                subtitle:'size'
            },
        ]
        }
    },
    computed:{
      navDrawer:{
        get(){
          return this.$store.state.navShow;
        },
        set(value){
          this.$store.commit('navSwitch',value)
        }
      }
    } 
}
</script>