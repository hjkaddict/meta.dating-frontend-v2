<template>
  <div class="container">
    <ChatMessage
      class="msg"
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script>
import ChatMessage from "@/components/Chat/ChatMessage";
export default {
  components: { ChatMessage },
  props: ["messages"],
  methods: {
    scrollToEnd() {
      this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
    },
  },
  updated() {
    this.$nextTick(function() {
      this.scrollToEnd();
    });
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  overflow: auto;
  display: flex; /* establish flex container */
  flex-direction: column; /* align children vertically */
}

.msg:first-child {
  margin-top: auto;
}
</style>
