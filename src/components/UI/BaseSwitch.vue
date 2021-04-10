<template>
  <section>
    <toggle-button
      @change="onChangeEventHandler"
      :value="status"
      :sync="true"
      :speed="0"
      color="#82C7EB"
      :labels="true"
    ></toggle-button>
    {{ id }} {{ status }}
  </section>
</template>
<script>
import { ToggleButton } from "vue-js-toggle-button"; //not by bulma
export default {
  components: {
    ToggleButton,
  },
  props: ["id", "status"],
  emits: ["emit-status"],
  methods: {
    onChangeEventHandler() {
      this.chosenStatus = !this.chosenStatus;
      this.$emit("emit-status", this.id, this.chosenStatus);
    },
  },
  data() {
    return {
      chosenStatus: this.status,
    };
  },
  mounted() {
  },
};
</script>
<style scoped></style>
