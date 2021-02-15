<template>
  <v-card
    flat
    :elevation="cardEval"
    @mousemove="cardEval = 15"
    @mouseleave="cardEval = 2"
    @click="changeConfig"
    class="py-6"
    style="cursor:pointer"
  >
    <v-icon class="green--text" v-show="config == serverConfig">
      check_circle
    </v-icon>
    <v-card-text
      class="pb-0 text-center black--text font-weight-bold text-button"
      >{{ config.ssd }}</v-card-text
    >
    <v-card-text class="pb-0 text-center blue--text text--darken-2 ">
      <span class="text-h3 font-weight-bold">${{ config.priceP_M }}</span>
      <span class="text-h6">/mo</span>
    </v-card-text>
    <v-card-text class="text-center text--darken-2 text-button"
      >${{ config.priceP_H }}/h</v-card-text
    >
    <v-divider class="mx-auto my-4 blue" style="max-width:30px"></v-divider>
    <v-card-text class="pb-0 text-center">
      <span class="font-weight-bold text--darken-4 text-button">{{
        config.ssd
      }}</span>
      <span> SSD</span>
    </v-card-text>
    <v-card-text class="pb-0 text-center">
      <span class="font-weight-bold text--darken-4 text-button">{{
        config.cpu
      }}</span>
      <span class="text--lighten-2"> vCPU</span>
    </v-card-text>
    <v-card-text class="pb-0 text-center">
      <span class="font-weight-bold text--lighten-4 text-button">{{
        config.memory
      }}</span>
      <span class="text--lighten-2"> Memory</span>
    </v-card-text>
    <v-card-text class="text-center">
      <span class="font-weight-bold text--darken-3 text-button">{{
        config.bandwidth
      }}</span>
      <span class="text--lighten-2"> Bandwidth</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      cardEval: 2,
    };
  },
  methods: {
    changeConfig() {
      this.$store.commit("changeConfig",this.config);
    },
  },
  computed: {
    serverConfig() {
      return this.$store.state.server.config;
    },
  },
};
</script>
