<template>
  <v-card
    flat
    :elevation="cardEval"
    @mousemove="cardEval = 15"
    @mouseleave="cardEval = 2"
    @click="changeType"
    style="cursor:pointer,position: relative"
  >
    <v-icon class="check_icon green--text" v-show="server.title == serverType">
      check_circle
    </v-icon>
    <img
      :src="`/img/${server.image}`"
      :alt="server.title"
      style="max-width:100%,margin:0 auto"
      class="px-6 mt-4"
    />
    <v-card-title>
      {{ server.title }}
    </v-card-title>
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
    changeType() {
      this.$store.commit("changeType", this.server.title);
    },
  },
  computed: {
    serverType() {
      return this.$store.state.server.type;
    },
  },
};
</script>
<style>
.check_icon{
  position: absolute !important;
  top:4px;
  right:4px;
}
</style>