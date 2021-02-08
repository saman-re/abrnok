<template>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      height="100%"
    >
  <div class="container d-flex justify-center mb-15">
    <v-card max-width="500px" class="px-10 py-2 mt-14">
      <v-card-title class="mb-2 pl-0 text--start">Sign In</v-card-title>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            label="Email"
            placeholder="Type your Email"
            outlined
            v-model="form.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Password"
            placeholder="Type your Password"
            outlined
            v-model="form.password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <!-- <v-card-subtitle class="text-end ma-0 pt-0 pr-0">
          <span>
          Forget password?
          </span>
        </v-card-subtitle> -->
        </v-col>
        
            
      </v-row>
      <v-row class="pa-2 ma-0">
        <v-col cols="12">
          <v-btn @click="signIn" color="primary" block tile>Submit</v-btn>
        </v-col>
      </v-row>
      <v-card-subtitle class="text-center">
          <span>Dont have account?</span>
          <span class="blue--text" @click="$router.push('/sign_up')" style="cursor:pointer">Sign Up</span>
      </v-card-subtitle>
    </v-card>
  </div>
    </v-parallax>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showPass:false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://45.147.231.127:8000/auth/new-token", this.form)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>