<template>
  <section
    class="is-flex has-background-dark is-justify-content-center is-align-items-center"
  >
    <!-- msg container -->
    <div class="msgContainer" v-if="this.chosenBots.bots.length === 0">
      <p>Bitte Bots Auswählen</p>
    </div>

    <div class="buttonContainer" v-if="this.chosenBots.bots.length === 1">
      <base-button
        :buttonTitle="'mit  ' + this.chosenBots.bots[0].name + ' chatten'"
      ></base-button>
    </div>

    <div
      class="buttonContainer"
      v-if="this.chosenBots.bots.length === 2"
      v-on:click="queryBots()"
    >
      <!-- <router-link to="/chat"
        ><base-button buttonTitle="Bots in die Arena schicken"></base-button>
      </router-link> -->

      <router-link
        :to="{
          name: 'chat',
          params: { base64: base64, routed: true },
        }"
      >
        <base-button buttonTitle="Bots in die Arena schicken"></base-button>
      </router-link>
    </div>
  </section>
</template>
<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  props: ["chosenBots", "base64"],
  components: {
    BaseButton,
  },
  methods: {
    async queryBots() {
      // reset connection to socket server
      this.$socket.client.connect();
      // request connection to new room
      this.$socket.client.emit("room", this.chosenBots.conversation_id);
      const queryURL = "https://www.metathema.net/api/chat/" + this.base64;
      const response = await fetch(queryURL);
      const data = await response.json();
      console.log(data)
    },
  },
};
</script>
<style scoped>
section {
}
</style>
