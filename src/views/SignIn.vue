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
              label="Email"
              prepend-inner-icon="mdi-email"
              placeholder="Type your Email"
              outlined
              v-model="form.email"
              autocomplete="off"
              :rules="[rules.required, rules.email]"
              clearable
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
              :rules="[rules.required]"
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
            <v-btn
              @click="signIn"
              color="primary"
              block
              tile
              :disabled="btnEnable&&(this.form.email&&this.form.password)"
              :loading="loading"
              >Submit</v-btn
            >
          </v-col>
        </v-row>
        <v-card-subtitle class="text-center">
          <span>Dont have account?</span>
          <span
            class="blue--text"
            @click="$router.push('/sign_up')"
            style="cursor:pointer"
            >Sign Up</span
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
      loading: false,
      form: {
        email: "",
        password: "",
      },
      alerts: [
        {
          message: "your password is not correct",
          show: false,
        },
        {
          message: "your email doesnt exist",
          show: false,
        },
      ],
      btnEnable:true,
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.btnEnable= !pattern.test(value)
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    signIn() {
      this.loading = true;
      axios
        .post("http://45.147.231.127:8000/auth/new-token", this.form)
        .then((res) => {
          this.loading = false;
          console.log(res.data);
          this.$store.commit('profileSet',res.data)
          if (res.status == 200) {
            this.$router.push("/new_server");
          }
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.status == 401&&this.form.password) {
            this.alerts[0].show = true;
          } else if (error.response.status == 500) {
            this.alerts[1].show = true;
          }
        });
    },
  },
};
</script>
