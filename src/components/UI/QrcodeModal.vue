<template>
  <div class="modal" :class="{ 'is-active': this.on }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content is-flex is-justify-content-center">
      <QrcodeVue style="" :value="value" :size="300" level="L" />
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main";
import QrcodeVue from "qrcode.vue";

export default {
  props: ["value"],
  components: {
    QrcodeVue,
  },
  data() {
    return {
      on: false,
    };
  },
  methods: {
    close() {
      this.on = false;
    },
  },
  created() {
    eventBus.$on("generate-qrcode", (value) => {
      this.on = value;
    });
  },
};
</script>

<style scoped></style>
