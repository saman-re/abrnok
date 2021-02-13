<template>
  <v-row justify="center">
    <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    computed:{
        dialog:{
            get(){
                return this.$store.state.dialogShow;
            },
            set(value){
                this.$store.commit('profDialogSwitch',value)
            }
        }
    }
  }
</script>