<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    height="100%"
  >
    <div class="container d-flex justify-center mb-15">
      <v-card max-width="500px" class="px-10 py-2 mt-14">
        <v-card-title class="mb-2 pl-0 text--start">Sign In</v-card-title>
        <v-row no-gutters>
          <v-alert
            v-for="(alert, index) in alerts"
            :key="index"
            v-model="alert.show"
            border="left"
            dense
            outlined
            text
            transition="scale-transition"
            type="error"
            dismissible
            >{{ alert.message }}</v-alert
          >
          <v-col cols="12">
            <v-text-field
              label="User Name"
              prepend-inner-icon="mdi-account-box"
              placeholder="Enter your full name"
              outlined
              v-model="form.full_name"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email"
              prepend-inner-icon="mdi-email"
              placeholder="Type your Email"
              outlined
              v-model="form.email"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              prepend-inner-icon="mdi-lock"
              placeholder="Type your Password"
              outlined
              v-model="form.password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              prepend-inner-icon="mdi-lock"
              placeholder="Re-Type your Password"
              outlined
              v-model="reTypePass"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
              autocomplete="off"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pa-2 ma-0">
          <v-col cols="12">
            <v-btn @click="signUp" color="primary" block tile>Submit</v-btn>
          </v-col>
        </v-row>
        <v-card-subtitle class="text-center">
          <span>Already have an account?</span>
          <span
            class="blue--text"
            @click="$router.push('/')"
            style="cursor: pointer"
            >Sign Ip</span
          >
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
      showPass: false,
      form: {
        full_name: "",
        email: "",
        password: "",
      },
      reTypePass: "",
      alerts: [
        {
          message: "password doesnt match to the repeated password",
          show: false,
        },
        {
            message:"Email already exists",
            show:false
        }
      ],
    };
  },
  methods: {
    signUp() {
      if (this.form.password == this.reTypePass) {
        axios
          .post("http://45.147.231.127:8000/auth/register", this.form)
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.$router.push("/new_server");
            }else if(res.status==409){
                this.alerts[1].show=true;
            }
          });
      } else {
        console.log("pas!");
        this.alerts[0].show = true;
      }
    },
  },
};
</script>