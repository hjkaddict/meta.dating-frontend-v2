<template>
  <section>
    <div class="hero is-fullheight is-warning">
      <div class="hero-head">
        <Nav />
      </div>

      <div class="hero-body has-background-primary">
        <ChatContainer />
      </div>

      <div class="hero-foot has-background-primary">
        <div class="container has-text-centered">
          chat contrl panel goes here
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Nav from "@/components/Nav/Nav";
import ChatContainer from "@/components/Chat/ChatContainer";
export default {
  components: {
    Nav,
    ChatContainer,
  },
};
</script>
<style scoped>
.hero-body {
  position: fixed;
  width: 100vw;
  height: 90vh;
}

.hero-foot {
  position: fixed;
  width: 100vw;
  bottom: 0;
  border: 1px solid red;
  height: 10vh;
}
.aa {
  height: 100vh;
}
</style>
