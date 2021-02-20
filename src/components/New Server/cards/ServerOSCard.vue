<template>
  <v-card
    flat
    :elevation="cardEval"
    @mousemove="cardEval = 15"
    @mouseleave="cardEval = 2"
    @click="changeOS"
    style="cursor:pointer,position: relative"
  >
    <v-icon class="check_icon green--text" v-show="OS.name == serverOS">
      check_circle
    </v-icon>
    <v-card-text class="d-flex justify-center">
      <InlineSvg
        :src="require(`@/assets/SVG/OSSVG/${OS.image}`)"
        style="max-width:100%,margin:0 auto"
        class="px-0"
      ></InlineSvg>
    </v-card-text>
    <v-card-text class="text-center">
      {{ OS.name }}
    </v-card-text>
  </v-card>
</template>

<script>
import InlineSvg from "vue-inline-svg";
export default {
  props: ["OS"],
  data() {
    return {
      cardEval: 2,
    };
  },
  methods: {
    changeOS() {
      this.$store.commit("changeOS", this.OS.name);
    },
  },
  computed: {
    serverOS() {
      return this.$store.state.server.os;
    },
  },
  components: {
    InlineSvg,
  },
};
</script>
