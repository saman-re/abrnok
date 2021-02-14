<template>
    <v-navigation-drawer app v-model="navDrawer" clipped width="90px" class="blue darken-3 container px-0">
      <v-list>
        <v-list-item class="container px-0" v-for="(listItem,index) in listItems" :key="index">
          <v-card flat width="100%" class="blue darken-3 mb-3" style="cursor:pointer" link :to="{hash:`#${listItem.subtitle}`}">
            <v-card-text class="text-center pb-0">
            <v-icon x-large class="white--text">
              {{listItem.icon}}
            </v-icon>
            </v-card-text>
            <v-card-subtitle class="pt-0 text-center white--text">
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
        listItems:[
            {
                icon:'storage',
                subtitle:'Type'
            },
            {
                icon:'public',
                subtitle:'Location'
            },
            {
                icon:'window',
                subtitle:'OS'
            },
            {
                icon:'sd_card',
                subtitle:'Config'
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