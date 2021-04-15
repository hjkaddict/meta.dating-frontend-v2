<template>
  <section>
    <div class="columns m-0" :class="{ 'p-5': isMobile() }">
      <bot-list
        class="column is-one-third has-background-primary"
        :botlist="semester"
        @this-bot="receivedId"
        @emit-chosen="receiveChosen"
        :chosenBots="chosenBots"
      ></bot-list>
      
      <!-- Bot description component only for desktop -->
      <bot-description
        class="column is-two-thirds is-hidden-mobile hero is-fullheight"
        :metadata="selectedBot"
        :chosenBots="chosenBots"
        @emit-chosen="receiveChosen"
      ></bot-description>
    </div>

    <control-panel
      class="control-panel"
      :chosenBots="chosenBots"
    ></control-panel>
  </section>
</template>

<script>
import BotList from "@/components/Bots/BotList";
import BotDescription from "@/components/Bots/BotDescription";
import ControlPanel from "@/components/Bots/ControlPanel";

export default {
  components: {
    BotList,
    BotDescription,
    ControlPanel,
  },
  methods: {
    receivedId(id) {
      const bot = this.semester.bots.find((bot) => bot.id == id);
      this.selectedBot = bot;
    },
    receiveChosen(choose, id) {
      this.semester.bots.find((bot) => bot.id == id).isChosen = choose;
      const filteredBots = this.semester.bots.filter(
        (bot) => bot.isChosen === true
      );
      this.chosenBots = filteredBots;
    },
  },

  data() {
    return {
      semesterId: this.$route.params.id,
      selectedBot: "",
      chosenBots: [],
      semester: {
        title: "AIOT#2 - Darkbot",
        term: "wintersemester2020-21",

        bots: [
          {
            id: 0,
            name: "PR-Kooikerhondje",
            gruppe: "Gruppe 1",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/PR-Kooikerhondje.png",
            description:
              "000Vis nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 1,
            name: "Die Klangschale",
            gruppe: "Gruppe 2",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/DieKlangschale.jpeg",
            description:
              "111Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 2,
            name: "Feuerzeug",
            gruppe: "Gruppe 3",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/Feuerzeug.jpeg",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 3,
            name: "Siebtraeger",
            gruppe: "Gruppe 4",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/Siebtraeger.jpeg",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 4,
            name: "Mauspad",
            gruppe: "Gruppe 5",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/Mauspad.png",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: ["Beringar Haas", "Sigmund Meier"],
            isChosen: false,
          },
          {
            id: 5,
            name: "Melitta",
            gruppe: "Gruppe 6",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/Melitta.webp",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 6,
            name: "Savage bibi",
            gruppe: "Gruppe 7",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/SavageBibi.jpeg",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
          {
            id: 7,
            name: "Uhrsula Richemont",
            gruppe: "Gruppe 8",
            platform: "Watson Assistant V2",
            profilepics: "@/assets/img/profilepics/UhrsulaRichemont.jpeg",
            description:
              "Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex. Vis etiam nonumy eirmod an, maiorum scriptorem neglegentur cu vix. Et velit gloriatur eam, cu viderer erroribus quo. Ius te audiam electram. Tantas impetus numquam ut nam. Vim ut possim repudiare. Semper aliquip menandri ad sea, doctus labitur explicari has ex.",
            students: [
              "Beringar Haas",
              "Sigmund Meier",
              "Elisabeth Werner",
              "Nikolaus Stein",
              "Kerstin Scholz",
            ],
            isChosen: false,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.columns {
  /* border: 2px solid yellow; */
  width: 100vw;
  /* max-width: 100%; */
}
.control-panel {
  position: fixed;
  height: 8vh;
  bottom: 0;
  width: 100vw;
  z-index: 2;
}
</style>
