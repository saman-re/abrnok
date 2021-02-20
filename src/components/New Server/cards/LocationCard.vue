<template>
  <v-card
    flat
    :elevation="cardEval"
    @mousemove="cardEval = 15"
    @mouseleave="cardEval = 2"
    @click="changeLocation"
    style="cursor:pointer,position: relative"
    max-width="350"
  >
    <v-icon class="check_icon green--text" v-show="server.location == serverLocation">
      check_circle
    </v-icon>
    <img
      :src="`/img/${server.image}`"
      :alt="server.location"
      style="max-width:100%"
      class="px-6"
    />
    <v-card-text class="text-center font-weight-bold text-h6 text-darken-3">
      {{ server.location }}
    </v-card-text>
    <v-card-subtitle class="text-center pt-0">
      {{ server.country }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["server"],
  data() {
    return {
      cardEval: 2,
    };
  },
  methods: {
    changeLocation() {
      this.$store.commit("changeLocation", this.server.location);
    },
  },
  computed: {
    serverLocation() {
      return this.$store.state.server.location;
    },
  },
};
</script>
