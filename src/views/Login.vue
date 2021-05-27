<template>
  <section>
    <div class="hero is-fullheight is-dark">
      <div class="hero-head">
        <Nav />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered p-5">
            <div class="column is-5-tablet is-4-desktop">
              <form
                class="box has-background-dark"
                v-on:submit.prevent="loginSubmit"
              >
                <div class="field">
                  <label for="" class="label has-text-white">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      placeholder="example@meta-dating.de"
                      class="input"
                      required
                      v-model="credentials.username"
                    />
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label has-text-white">Password</label>
                  <div class="control">
                    <input
                      type="password"
                      placeholder="password"
                      class="input"
                      required
                      v-model="credentials.password"
                    />
                  </div>
                </div>

                <div class="field has-text-right">
                  <label for="" class="checkbox has-text-white">
                    eingelogt bleiben
                    <p-check color="danger" class="mr-0 ml-3"></p-check>
                  </label>
                </div>

                <div class="field has-text-centered">
                  <base-button
                    buttonTitle="Login"
                    class="a"
                    type="submit"
                  ></base-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {
    Nav,
    BaseButton,
  },
  data() {
    return {
      credentials: {},
    };
  },
  methods: {
    async loginSubmit() {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(this.credentials),
      };
      fetch("http://metathema.net/api/users/login", request)
        .then(async (res) => {
          const token = await res.json();
          
          // check for error response
          if (!res.ok) {
            // get error message from body or default to response status
            const error = res.status;
            return Promise.reject(error);
          }

          this.token = token;

          localStorage.setItem("accessToken", token);
          this.$router.push("dashboard");
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style scoped>
.a {
  padding: 0px 100px;
}
</style>
