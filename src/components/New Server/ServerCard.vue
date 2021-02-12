<template>
    <v-card
        flat
        :elevation="cardEval"
        @mousemove="cardEval = 15"
        @mouseleave="cardEval = 2"
        style="cursor:pointer"
      >
        <div class="blue" style="height:120px"></div>
        <v-card-title>
          {{ server.title }}
        </v-card-title>
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