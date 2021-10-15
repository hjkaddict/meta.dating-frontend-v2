<template>
  <div class="container scrollable" ref="chatContainer">
    <ChatMessage
      slot="pdf-content"
      class="msg"
      :info="info"
      v-for="message in this.messagesArray"
      :key="message.id"
      :message="message"
      :pdf-div="false"
    />

    <!-- download chat component -->

    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="false"
      :preview-modal="true"
      :paginate-elements-by-height="1100"
      :pdf-quality="2"
      :manual-pagination="true"
      :html-to-pdf-options="htmlToPdfOptions"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <ChatMessage
          slot="pdf-content"
          class="msg"
          v-for="message in this.messagesArray"
          :key="message.id"
          :message="message"
          :pdf-div="true"
        />
      </section>
    </vue-html2pdf>

    <!-- more button  -->
    <div
      :style="{ right: this.minusWidthValue + 'px' }"
      class="moretab has-text-right has-background-white"
      :class="{ 'is-hidden': !this.showMore }"
    >
      <div @click="generateReport" class="p-3 is-clickable is-border">
        <p>Download Chat as PDF</p>
      </div>

      <div class="p-3 is-clickable is-border"><p>Download Chat as JSON</p></div>
      <div @click="generateQrcode" class="p-3 is-clickable is-border">
        <p>Get QR Code</p>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ChatMessage from "@/components/Chat/ChatMessage";
import VueHtml2pdf from "vue-html2pdf";

export default {
  components: {
    ChatMessage,
    VueHtml2pdf,
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
      minusWidthValue: undefined,
      showMore: false,
      htmlToPdfOptions: {
        margin: [0.2, 0], //[vMargin, hMargin]
        filename: `metadating_chat.pdf`,
        html2canvas: {
          scale: 1,
          useCORS: true,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
        //this option makes page break properly
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      },
    };
  },
  methods: {
    generateQrcode() {
      eventBus.$emit("generate-qrcode", true);

      //chagne two parameters: 1. for chatcontrolpanel UI 2. actual pause function
      eventBus.$emit("emit-pause-to-controlpanel", true);
      this.pause = true;
      //close the more tab
      eventBus.$emit("emit-moretab", false);
      this.showMore = false;
    },

    generateReport() {
      this.$refs.html2Pdf.generatePdf();

      //chagne two parameters: 1. for chatcontrolpanel UI 2. actual pause function
      eventBus.$emit("emit-pause-to-controlpanel", true);
      this.pause = true;
      //close the more tab
      eventBus.$emit("emit-moretab", false);
      this.showMore = false;
    },

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

    onResize() {
      var width = window.innerWidth - this.$refs.chatContainer.clientWidth;
      this.minusWidthValue = width / 2;
    },
  },

  created() {
    eventBus.$on("emit-speed", (speed) => {
      this.speedLevel = speed;
      this.clearMessageByTime();
      this.pushMessagesByTime();
    });
    eventBus.$on("emit-pause", (pause) => {
      this.pause = pause;
    });
    eventBus.$on("emit-info", (value) => {
      this.info = value;
    });
    eventBus.$on("emit-more-function", (value) => {
      console.log(value);
      this.showMore = value;
    });
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    var width = window.innerWidth - this.$refs.chatContainer.clientWidth;
    this.minusWidthValue = width / 2;
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
.is-border {
  border: 1px solid black;
}

.container {
  height: 100%;
  overflow: auto;
  display: flex; /* establish flex container */
  flex-direction: column; /* align children vertically */
}

.moretab {
  position: fixed;
  bottom: 10vh;
}

.msg:first-child {
  margin-top: auto;
}
</style>
