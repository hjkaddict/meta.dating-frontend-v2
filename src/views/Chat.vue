<template>
  <section>
    <div class="hero is-fullheight">
      <div class="hero-head">
        <Nav />
      </div>

      <div class="hero-body has-background-primary">
        <ChatContainer />
      </div>

      <div class="hero-foot has-background-primary">
        <ChatControlpanel />
      </div>
    </div>
  </section>
</template>
<script>
import Nav from "@/components/Nav/Nav";
import ChatContainer from "@/components/Chat/ChatContainer";
import ChatControlpanel from "@/components/Chat/ChatControlpanel";
export default {
  components: {
    Nav,
    ChatContainer,
    ChatControlpanel,
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
  height: 10vh;
}
</style>
