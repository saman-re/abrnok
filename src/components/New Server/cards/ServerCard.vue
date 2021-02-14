<template>
    <v-card
        flat
        :elevation="cardEval"
        @mousemove="cardEval = 15"
        @mouseleave="cardEval = 2"
        style="cursor:pointer"
        width="100%"
      >
        <!-- <img src="@/assets/SVG/TypeSVG/Bare_Metal.svg" alt="" style="max-width:100%">
        <img src="@/assets/SVG/TypeSVG/Block_Storage.svg" alt="">
        <img src="@/assets/SVG/TypeSVG/Cloud_Compute.svg" alt="">
        <img src="@/assets/SVG/TypeSVG/Dedicated_Cloud.svg" alt=""> -->
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