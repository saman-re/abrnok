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
    <v-card-text>
      <img
        :src="`/img/${OS.image}`"
        :alt="OS.name"
        style="width:100%,margin:0 auto"
        class="px-6 mt-4"
      />
    </v-card-text>
    <v-card-text class="text-center">
      {{ OS.name }}
    </v-card-text>
  </v-card>
</template>

<script>
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
};
</script>
