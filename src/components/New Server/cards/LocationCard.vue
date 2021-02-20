<template>
  <v-card
    flat
    :elevation="cardEval"
    @mousemove="cardEval = 15"
    @mouseleave="cardEval = 2"
    @click="changeLocation"
    style="cursor:pointer,position:relative"
    max-width="350"
  >
    <v-icon
      class="check_icon green--text"
      v-show="server.location == serverLocation"
    >
      check_circle
    </v-icon>
    <v-card-text class="d-flex justify-center">
      <InlineSvg
        :src="require(`@/assets/SVG/LocationSVG/${server.image}`)"
        style="max-width:100%,margin:0 auto"
        class="px-0"
      ></InlineSvg>
    </v-card-text>
    <v-card-text class="text-center font-weight-bold text-h6 text-darken-3">
      {{ server.location }}
    </v-card-text>
    <v-card-subtitle class="text-center pt-0">
      {{ server.country }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import InlineSvg from "vue-inline-svg";
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
  components: {
    InlineSvg,
  },
};
</script>
