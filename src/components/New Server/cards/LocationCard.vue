<template>
    <v-card
        flat
        :elevation="cardEval"
        @mousemove="cardEval = 15"
        @mouseleave="cardEval = 2"
        style="cursor:pointer"
        max-width="350"
      >
      <!-- /img/Los_Angeles.7a9785b5.svg -->
        <!-- <div class="blue" style="height:120px"></div> -->
        <img :src="`/img/${server.image}`" :alt="server.location" style="max-width:100%" class="px-6">
        <v-card-text class="text-center font-weight-bold text-h6 text-darken-3">
          {{ server.location }}
        </v-card-text>
        <v-card-subtitle class="text-center pt-0">
            {{server.country}}
        </v-card-subtitle>
      </v-card>
</template>

<script>
export default {
    props:["server"],
    data(){
        return{
            cardEval: 2,
        }
    }
}
</script>