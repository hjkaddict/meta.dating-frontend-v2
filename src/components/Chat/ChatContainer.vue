<template>
  <div class="container scrollable" ref="chatContainer">
    <ChatMessage
      class="msg"
      :info="info"
      v-for="message in this.messagesArray"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ChatMessage from "@/components/Chat/ChatMessage";

export default {
  components: {
    ChatMessage,
  },
  props: ["messages"],
  data() {
    return {
      messagesArray: [], //new Array for controlling chat speed
      speed: [7500, 5000, 2500],
      speedLevel: 2,
      info: false,
      pause: false,
      counter: 0,
      interval: undefined,
    };
  },
  methods: {
    pushMessagesByTime() {
      this.interval = setInterval(() => {
        if (this.pause === false) {
          if (this.messages[this.counter]) {
            this.messagesArray.push(this.messages[this.counter]);
            this.counter++;
            // console.log(this.counter);
          }
          // console.log(this.messages[this.counter]);
        }
      }, this.speed[this.speedLevel]);
    },

    clearMessageByTime() {
      clearInterval(this.interval);
    },
  },

  created() {
    eventBus.$on("emit-speed", (speed) => {
      this.speedLevel = speed;
      this.clearMessageByTime();
      this.pushMessagesByTime();
    });
    eventBus.$on("emit-pause", (pause) => {
      // console.log("Pause: " + pause);
      this.pause = pause;
    });
    eventBus.$on("emit-info", (value) => {
      this.info = value;
      console.log(this.info);
    });
  },
  mounted() {
    this.pushMessagesByTime();
    this.$nextTick(function() {
      var container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
    });
  },
  updated() {
    this.$nextTick(function() {
      var container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
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
