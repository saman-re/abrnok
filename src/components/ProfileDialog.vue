<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="text-headline">
          Profile
        </v-card-title>
        <v-card-text>
            this is your profile
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data(){
    console.log(this.$store.state.profile);
    return{}
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialogShow;
      },
      set(value) {
        this.$store.commit("profDialogSwitch", value);
      },
    },
  },
};
</script>
