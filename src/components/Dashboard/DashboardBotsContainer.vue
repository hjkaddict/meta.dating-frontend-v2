<template>
  <div class="columns is-multiline ">
    <AddedBot
      class="column is-12-tablet is-4-desktop"
      v-for="addedbot in this.addedbots.slice().reverse()"
      :key="addedbot.id"
      :addedbot="addedbot"
    />
  </div>
</template>
<script>
import AddedBot from "@/components/Dashboard/AddedBot.vue";
export default {
  props: ["addedbots"],
  components: {
    AddedBot,
  },
};
</script>
