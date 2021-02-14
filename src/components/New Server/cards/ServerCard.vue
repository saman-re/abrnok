<template>
    <v-card
        flat
        :elevation="cardEval"
        @mousemove="cardEval = 15"
        @mouseleave="cardEval = 2"
        style="cursor:pointer"
      >
        <img :src="`/img/${server.image}`" :alt="server.title" style="max-width:100%,margin:0 auto" class="px-6 mt-4">
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