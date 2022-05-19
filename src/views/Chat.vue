<template>
  <section>
    <div class="hero">
      <div class="hero-head">
        <Nav />
      </div>

      <div class="hero-body has-background-primary">
        <ChatContainer :messages="this.messages" />
      </div>

      <QrcodeModal :value="this.directLinkToChat" />

      <div class="hero-foot has-background-primary has-text-white">
        <ChatControlpanel />
      </div>
    </div>
  </section>
</template>
<script>
import Nav from "@/components/Nav/Nav";
import ChatContainer from "@/components/Chat/ChatContainer";
import ChatControlpanel from "@/components/Chat/ChatControlpanel";
import QrcodeModal from "@/components/UI/QrcodeModal.vue";

export default {
  components: {
    Nav,
    ChatContainer,
    ChatControlpanel,
    QrcodeModal,
  },
  props: {
    routed: Boolean,
  },
  data() {
    return {
      room_id: "",
      direct: !this.routed,
      botQuery: this.$route.params.base64,
      messages: [],
      pause: false,
      directLinkToChat: "",
    };
  },

  methods: {},

  sockets: {
    connect() {
      console.log("socket connected");
    },
    message(message) {
      // save to messages[] and it will get pushed down to MessagesContainer
      // message.show = false;
      this.messages.push(message);
    },
  },

  async created() {
    if (this.direct) {
      // on refresh with provided link we should create a new conversation id and send a new request to server

      const decodedBotQuery = JSON.parse(atob(this.botQuery));
      this.room_id = this.$uuidv4();
      decodedBotQuery.conversation_id = this.room_id;
      console.log(
        "new conversation_id on refresh: " + decodedBotQuery.conversation_id
      );
      const refreshedBotQuery = btoa(JSON.stringify(decodedBotQuery));
      this.$socket.client.emit("room", this.room_id);
      const queryURL =
        "https://www.metathema.net/api/chat/" + refreshedBotQuery;
      const response = await fetch(queryURL);
      const data = await response.json();
      console.log(data);
    }

    //save url as a variable for qr code
    this.directLinkToChat = "https://www.metathema.net/#" + this.$route.path;
    console.log(this.directLinkToChat);
  },
  beforeDestroy() {
    // disconnect socket in order to stop recursive function on server
    this.$socket.client.disconnect();
  },
};
</script>
<style scoped>
.hero-body {
  position: fixed;
  width: 100vw;
  height: 90%;
}

.hero-foot {
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 10%;
}
</style>
