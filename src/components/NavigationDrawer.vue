<template>
    <v-navigation-drawer app v-model="navDrawer" clipped width="130px" class="blue darken-3 container">
      <v-list>
        <v-list-item class="pa-0 container" v-for="(listItem,index) in listItems" :key="index">
          <v-card flat class="blue darken-3">
            <v-card-text class="text-center pb-0">
            <v-icon x-large class="black--text">
              mdi-{{listItem.icon}}
            </v-icon>
            </v-card-text>
            <v-card-subtitle class="pt-0">
              {{listItem.subtitle}}
            </v-card-subtitle>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['navShow'],
    data(){
        return{
            navDrawer:this.navShow,
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
    }
}
</script>