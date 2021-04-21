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
              <form action="" class="box has-background-dark">
                <div class="field">
                  <label for="" class="label has-text-white">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      placeholder="example@meta-dating.de"
                      class="input"
                      required
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
                    />
                  </div>
                </div>

                <div class="field has-text-right">
                  <label for="" class="checkbox has-text-white">
                    eingelogt bleiben
                    <p-check color="danger" class="mr-0 ml-3"></p-check>
                  </label>
                </div>

                <div class="field"></div>
              </form>
              <div class="field has-text-centered">
                <base-button buttonTitle="Login" class="a"></base-button>
              </div>
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
};
</script>

<style scoped>

.a {
  padding: 0px 100px;
}

.b {
  border: 1px solid red;
}
</style>
