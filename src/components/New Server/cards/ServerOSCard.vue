<template>
    <v-card
        flat
        :elevation="cardEval"
        @mousemove="cardEval = 15"
        @mouseleave="cardEval = 2"
        style="cursor:pointer"
      >
        <!-- <img :src="`/img/${OS.image}`" :alt="OS.name" style="max-width:100%,margin:0 auto" class="px-6 mt-4"> -->
        <v-card-text class="text-center">
          {{ OS.name }}
        </v-card-text>
      </v-card>
</template>

<script>
export default {
    props:["OS"],
    data(){
        return{
            cardEval: 2,
        }
    }
}
</script>