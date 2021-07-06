<template>
  <section>
    <div class="columns m-0" :class="{ 'p-5': isMobile() }">
      <!-- botllist="botProfileData" : sending botProfileData as a prop to BotList -->
      <bot-list
        class="column is-one-third has-background-primary"
        :botlist="botProfileData"
      ></bot-list>

      <!-- Bot description component only for desktop -->
      <bot-description
        class="column is-two-thirds is-hidden-mobile hero is-fullheight"
        :metadata="selectedBot"
      ></bot-description>
    </div>

    <!-- control panel which is always fixed at the bottom  -->
    <control-panel
      class="control-panel"
      :chosenBots="chosenBots"
      :base64="chosenBotsBase64"
    ></control-panel>
  </section>
</template>

<script>
import BotList from "@/components/Bots/BotList";
import BotDescription from "@/components/Bots/BotDescription";
import ControlPanel from "@/components/Bots/ControlPanel";
import { eventBus } from "@/main";

export default {
  components: {
    BotList,
    BotDescription,
    ControlPanel,
  },
  emits: ["chosen-bots", "emit-bot-description"],
  async created() {
    // receive bot-id from Bot component, find bot by the id.
    eventBus.$on("emit-bot-name", (name) => {
      const bot = this.botProfileData.find((bot) => bot.name == name);
      this.selectedBot = bot;

      //then emit this founded bot to eventBus (for Bot description)
      eventBus.$emit("emit-bot-description", bot);
    });

    //fetching bots from backend

    const term = this.$router.currentRoute.params.id;

    const response = await fetch("http://www.metathema.net/api/bots/term/" + term);
    const data = await response.json();
    this.botProfileData = data;

    eventBus.$on("increment-selected", (profileData) => {
      //the bot that user click "auswaelen"
      let chosenBot = {
        name: profileData.name,
        service: profileData.service,
        turn: this.botCounter,
      };

      this.chosenBots.bots.push(chosenBot);
      this.toBase64();

      eventBus.$emit("chosen-bots", this.chosenBots.bots);
      this.botCounter = this.botCounter + 1;
    });

    eventBus.$on("decrement-selected", (profileData) => {
      var index = this.chosenBots.bots.findIndex(
        (bot) => bot.name == profileData.name
      );
      if (index == 0 || index == 1) this.chosenBots.bots.splice(index, 1);
      this.toBase64();
      this.botCounter = this.botCounter - 1;

      eventBus.$emit("chosen-bots", this.chosenBots.bots);
    });
  },

  methods: {
    toBase64() {
      this.chosenBotsBase64 = btoa(JSON.stringify(this.chosenBots));
    },
  },

  data() {
    return {
      selectedBot: "",
      botProfileData: null,
      chosenBots: { bots: [], conversation_id: this.$uuidv4() },
      botCounter: 0,
      chosenBotsBase64: "",
    };
  },
};
</script>

<style scoped>
.columns {
  width: 100vw;
}
.control-panel {
  position: fixed;
  height: 8vh;
  bottom: 0;
  width: 100vw;
  z-index: 0;
}
</style>
